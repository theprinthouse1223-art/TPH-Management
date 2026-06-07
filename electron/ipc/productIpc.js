const {
    ipcMain
} = require("electron");

const prisma =
    require(
        "../../src/database/prismaClient"
    ).default;

function registerProductIpc(){

    ipcMain.handle(

        "products:getAll",

        async()=>{

            return prisma.product.findMany({

                orderBy:{
                    name:"asc"
                }

            });

        }

    );

    ipcMain.handle(

        "products:create",

        async(
            event,
            data
        )=>{

            return prisma.product.create({

                data

            });

        }

    );

    ipcMain.handle(

        "products:update",

        async(
            event,
            id,
            data
        )=>{

            return prisma.product.update({

                where:{
                    id
                },

                data

            });

        }

    );

    ipcMain.handle(

        "products:delete",

        async(
            event,
            id
        )=>{

            return prisma.product.delete({

                where:{
                    id
                }

            });

        }

    );

}

module.exports =
    registerProductIpc;