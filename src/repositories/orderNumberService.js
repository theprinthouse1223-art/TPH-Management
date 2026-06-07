export function generateOrderNumber(
    id
){

    return "TPH-ORD-"
        + String(id)
            .padStart(6,"0");

}