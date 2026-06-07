import { useState } from "react";

import ProductForm from "./ProductForm";
import ProductGrid from "./ProductGrid";
import BarcodeLabel from "./BarcodeLabel";

import {
    createInventoryProduct
} from "../../services/productService";

export default function InventoryPage() {

    const [barcode, setBarcode] = useState("");

    async function handleSave() {

        // Temporary sample data
        // Later this will come from ProductForm

        const product = {

            name: "Coffee Mug",

            category: "MUG",

            purchasePrice: 80,

            sellingPrice: 200,

            stock: 10,

            minimumStock: 2

        };

        const saved =
            await createInventoryProduct(
                product
            );

        setBarcode(
            saved.barcode
        );

    }

    return (

        <div>

            <h1>

                Inventory

            </h1>

            <hr/>

            <ProductForm/>

            <br/>

            <button
                onClick={handleSave}
            >

                Save Product

            </button>

            <hr/>

            {

                barcode &&

                <BarcodeLabel
                    barcode={barcode}
                />

            }

            <hr/>

            <ProductGrid/>

        </div>

    );

}