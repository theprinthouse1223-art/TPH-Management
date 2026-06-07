import prisma from "../database/prismaClient";
import {
    createInventoryTransaction
} from "../repositories/inventoryTransactionRepository";

export async function receiveStock(
    productId,
    quantity,
    referenceNo
) {

    await prisma.product.update({
        where: {
            id: productId
        },
        data: {
            stock: {
                increment: quantity
            }
        }
    });

    await createInventoryTransaction({
        productId,
        movementType: "IN",
        quantity,
        referenceNo
    });

}