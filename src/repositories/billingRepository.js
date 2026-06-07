import prisma from "../../electron/database/prismaClient";

export function getReadyForBilling(){

    return prisma.customerOrder.findMany({

        where:{

            status:"READY",

            invoiceGenerated:false

        }

    });

}

export function markInvoiceGenerated(
    id,
    saleId
){

    return prisma.customerOrder.update({

        where:{
            id
        },

        data:{

            invoiceGenerated:true,

            saleId

        }

    });

}