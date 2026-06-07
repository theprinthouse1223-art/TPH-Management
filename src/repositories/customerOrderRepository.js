import prisma from "../../electron/database/prismaClient";

export function createCustomerOrder(
    data
){
    return prisma.customerOrder.create({
        data
    });
}

export function createArtwork(
    data
){
    return prisma.artworkFile.create({
        data
    });
}