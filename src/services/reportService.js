import prisma from "../database/prismaClient";

export async function getTodaySales() {

    const today = new Date();

    today.setHours(0,0,0,0);

    const result =
        await prisma.sale.aggregate({

            _sum:{
                totalAmount:true
            },

            where:{
                createdAt:{
                    gte:today
                }
            }

        });

    return result._sum.totalAmount || 0;

}

export async function getLowStockProducts(){

    return prisma.product.findMany({

        where:{
            stock:{
                lte:5
            }
        }

    });

}

export async function getPendingOrders(){

    return prisma.customerOrder.count({

        where:{
            status:{
                not:"DELIVERED"
            }
        }

    });

}

export async function getReadyForBilling(){

    return prisma.customerOrder.count({

        where:{
            status:"READY"
        }

    });

}