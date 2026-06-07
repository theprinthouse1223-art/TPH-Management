import prisma from "../database/prismaClient";

export async function createSale(
    data
){
    return prisma.sale.create({
        data
    });
}

export async function createSaleItem(
    data
){
    return prisma.saleItem.create({
        data
    });
}