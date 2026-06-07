import {
    createSale
} from "../repositories/salesRepository";

import {
    markInvoiceGenerated
} from "../repositories/billingRepository";

import {
    issueStock
} from "./stockService";

export async function generateInvoice(

    order,

    items

){

    const sale = await createSale({

        invoiceNo:
            order.orderNo.replace(
                "ORD",
                "INV"
            ),

        paymentMode:"CASH",

        totalAmount:0

    });

    for(
        const item
        of items
    ){

        await issueStock(

            item.productId,

            item.quantity,

            sale.invoiceNo

        );

    }

    await markInvoiceGenerated(

        order.id,

        sale.id

    );

    return sale;

}