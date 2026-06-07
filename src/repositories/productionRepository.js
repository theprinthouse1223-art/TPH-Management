import prisma from "../database/prismaClient";

export function createProductionJob(data){

    return prisma.productionJob.create({
        data
    });

}

export function updateStage(
    orderId,
    stage
){

    return prisma.productionJob.update({

        where:{
            orderId
        },

        data:{
            stage
        }

    });

}

export function getProductionJobs(){

    return prisma.productionJob.findMany({
        orderBy:{
            updatedAt:"asc"
        }
    });

}