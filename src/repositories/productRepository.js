import prisma from "../database/prismaClient";

export async function getProducts() {
    return prisma.product.findMany({
        orderBy: {
            name: "asc"
        }
    });
}

export async function getProductByBarcode(barcode) {
    return prisma.product.findUnique({
        where: {
            barcode
        }
    });
}

export async function createProduct(data) {
    return prisma.product.create({
        data
    });
}

export async function updateProduct(id, data) {
    return prisma.product.update({
        where: {
            id
        },
        data
    });
}

export async function deleteProduct(id) {
    return prisma.product.delete({
        where: {
            id
        }
    });
}