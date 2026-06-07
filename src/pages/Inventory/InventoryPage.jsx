import { useState } from "react";

import ProductForm from "./ProductForm";
import ProductGrid from "./ProductGrid";
import BarcodeLabel from "./BarcodeLabel";

import {
    createInventoryProduct
} from "../../services/productService";

export default function InventoryPage() {

    const [barcode, setBarcode] = useState("");

const [refreshKey,setRefreshKey] =
    useState(0);

async function handleSave(product){

    const saved =
        await createInventoryProduct(
            product
        );

    setBarcode(saved.barcode);

    setRefreshKey(
        previous => previous + 1
    );
}

    return (

        <div>

            <h1>

                Inventory

            </h1>

            <hr/>

<ProductForm

    onSave={

        handleSave

    }

/>
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

            <ProductGrid
    refreshKey={refreshKey}
/>

        </div>

    );

}