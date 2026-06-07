import prisma from "../database/prismaClient";

export function consumeMaterial(
    data
){

    return prisma.materialConsumption.create({

        data

    });

}