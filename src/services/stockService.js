import prisma from "../../electron/database/prismaClient";
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

export async function issueStock(

    productId,

    quantity,

    referenceNo

){

    await prisma.product.update({

        where:{
            id:productId
        },

        data:{
            stock:{
                decrement:quantity
            }
        }

    });

    await createInventoryTransaction({

        productId,

        movementType:"OUT",

        quantity,

        referenceNo

    });

}