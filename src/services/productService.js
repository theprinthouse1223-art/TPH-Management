import * as repository from "../repositories/productRepository";

import { generateSKU } from "../utils/skuGenerator";
import { getLastProduct } from "../repositories/productRepository";
import { generateSKU } from "../utils/skuGenerator";


export async function loadProducts(){

    return window
        .tph
        .products
        .getAll();

}

export async function saveProduct(
    product
){

    return window
        .tph
        .products
        .create(
            product
        );

}

export async function searchBarcode(barcode) {
    return repository.getProductByBarcode(barcode);
}

export async function editProduct(id, data) {
    return repository.updateProduct(id, data);
}

export async function removeProduct(id) {
    return repository.deleteProduct(id);
}


export async function createInventoryProduct(
    data
){

    // Temporary SKU generation

    data.sku =
        generateSKU(
            data.category,
            Date.now()
        );

    data.barcode =
        data.sku;

    return window
        .tph
        .products
        .create(
            data
        );

}

export async function loadProducts(){

    return window
        .tph
        .products
        .getAll();

}