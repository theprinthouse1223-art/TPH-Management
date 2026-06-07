import {
    updateStage
} from "../repositories/productionRepository";

export const STAGES = [

    "PENDING",

    "DESIGN",

    "PRINTING",

    "LASER",

    "FRAMING",

    "PACKING",

    "READY",

    "DELIVERED"

];

export async function moveToNextStage(
    orderId,
    currentStage
){

    const index =
        STAGES.indexOf(
            currentStage
        );

    if(
        index === -1
    )
        return;

    if(
        index ===
        STAGES.length - 1
    )
        return;

    return updateStage(

        orderId,

        STAGES[
            index + 1
        ]

    );

}