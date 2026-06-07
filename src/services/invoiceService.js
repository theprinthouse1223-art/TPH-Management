export function generateInvoiceNumber(
    id
){

    return "TPH-INV-"
        + String(id)
            .padStart(6,"0");

}