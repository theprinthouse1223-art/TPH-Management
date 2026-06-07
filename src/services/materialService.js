import {
    consumeMaterial
} from "../repositories/materialRepository";

export async function useMaterial(

    productId,

    quantity,

    referenceNo

){

    return consumeMaterial({

        productId,

        quantity,

        referenceType:"JOB",

        referenceNo

    });

}