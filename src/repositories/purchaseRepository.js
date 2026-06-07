import prisma from "../database/prismaClient";

export async function createPurchase(data) {
    return prisma.purchase.create({
        data
    });
}

export async function createPurchaseItem(data) {
    return prisma.purchaseItem.create({
        data
    });
}