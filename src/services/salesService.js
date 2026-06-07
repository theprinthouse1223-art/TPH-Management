import {
    issueStock
} from "./stockService";

export async function completeSale(

    items,

    invoiceNo

){

    for(
        const item of items
    ){

        await issueStock(

            item.productId,

            item.quantity,

            invoiceNo

        );

    }

}