import * as repository from "../repositories/productRepository";

export async function saveProduct(product) {

    if (!product.barcode)
        throw new Error("Barcode required");

    if (!product.sku)
        throw new Error("SKU required");

    if (!product.name)
        throw new Error("Product Name required");

    return repository.createProduct(product);
}

export async function loadProducts() {
    return repository.getProducts();
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