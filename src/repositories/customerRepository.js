import prisma from "../database/prismaClient";

export function searchCustomers(
    text
){

    return prisma.customer.findMany({

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

}