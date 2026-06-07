const {
    ipcMain
} = require("electron");

const prisma =
    require(
        "../database/prismaClient"
    );

const STAGES = [

    "PENDING",

    "DESIGN",

    "PRINTING",

    "LASER",

    "FRAMING",

    "PACKING",

    "READY",

    "DELIVERED"

];

function registerProductionIpc(){

    ipcMain.handle(

        "production:dashboard",

        async()=>{

            const result = {};

            for(
                const stage
                of STAGES
            ){

                result[stage] =

                    await prisma.productionJob.count({

                        where:{
                            stage
                        }

                    });

            }

            return result;

        }

    );

    ipcMain.handle(

        "production:moveNext",

        async(
            event,
            orderId
        )=>{

            const job =

                await prisma.productionJob.findUnique({

                    where:{
                        orderId
                    }

                });

            if(
                !job
            )
                return null;

            const index =
                STAGES.indexOf(
                    job.stage
                );

            if(
                index ===
                STAGES.length - 1
            )
                return job;

            return prisma.productionJob.update({

                where:{
                    orderId
                },

                data:{

                    stage:

                        STAGES[
                            index + 1
                        ]

                }

            });

        }

    );

}

module.exports =
    registerProductionIpc;