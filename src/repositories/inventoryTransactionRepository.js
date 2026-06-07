import prisma from "../database/prismaClient";

export async function createInventoryTransaction(data) {
    return prisma.inventoryTransaction.create({
        data
    });
}

export async function getInventoryLedger() {
    return prisma.inventoryTransaction.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
}