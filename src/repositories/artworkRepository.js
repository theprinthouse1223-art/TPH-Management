import prisma from "../database/prismaClient";

export function getCustomerArtworks(
    customerId
){

    return prisma.artworkFile.findMany({

        where:{

            order:{

                customerId

            }

        }

    });

}