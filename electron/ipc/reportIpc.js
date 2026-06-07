const {
    ipcMain
} = require("electron");

const prisma =
    require(
        "../../src/database/prismaClient"
    ).default;

function registerReportIpc(){

    ipcMain.handle(

        "reports:dashboard",

        async()=>{

            const lowStock =
                await prisma.product.count({

                    where:{
                        stock:{
                            lte:5
                        }
                    }

                });

            const pendingOrders =
                await prisma.customerOrder.count({

                    where:{
                        status:{
                            not:"DELIVERED"
                        }
                    }

                });

            const readyForBilling =
                await prisma.customerOrder.count({

                    where:{
                        status:"READY"
                    }

                });

            const sales =
                await prisma.sale.aggregate({

                    _sum:{
                        totalAmount:true
                    }

                });

            return {

                todaySales:
                    sales._sum.totalAmount || 0,

                lowStock,

                pendingOrders,

                readyForBilling

            };

        }

    );

}

module.exports =
    registerReportIpc;