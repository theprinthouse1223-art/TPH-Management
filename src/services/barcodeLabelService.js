export function printSingleLabel(
    barcode
){

    return window
        .tph
        .barcode
        .generate(
            barcode
        );

}

export function printBulkLabels(
    barcodes
){

    return window
        .tph
        .barcode
        .generateBulk(
            barcodes
        );

}