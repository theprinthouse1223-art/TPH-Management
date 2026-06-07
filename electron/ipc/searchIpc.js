const {
    ipcMain
} = require(
    "electron"
);

const prisma =
    require(
        "../database/prismaClient"
    );

function registerSearchIpc(){

    ipcMain.handle(

        "search:all",

        async(
            event,
            text
        )=>{

            const products =
                await prisma.product.findMany({

                    where:{

                        OR:[

                            {
                                name:{
                                    contains:text
                                }
                            },

                            {
                                barcode:{
                                    contains:text
                                }
                            },

                            {
                                sku:{
                                    contains:text
                                }
                            }

                        ]

                    }

                });

            const customers =
                await prisma.customer.findMany({

                    where:{

                        OR:[

                            {

                                name:{
                                    contains:text
                                }

                            },

                            {

                                phone:{
                                    contains:text
                                }

                            }

                        ]

                    }

                });

            const orders =
                await prisma.customerOrder.findMany({

                    where:{

                        orderNo:{
                            contains:text
                        }

                    }

                });

            return {

                products,

                customers,

                orders

            };

        }

    );

}

module.exports =
    registerSearchIpc;