import {
    useEffect,
    useState
} from "react";

import {
    loadProducts
} from "../../services/productService";

export default function ProductGrid(){

    const [products,
           setProducts] =
        useState([]);

    useEffect(()=>{

        async function load(){

            const data =

                await loadProducts();

            setProducts(
                data
            );

        }

        load();

    },[]);

    return(

        <table
            border="1"
        >

            <thead>

            <tr>

                <th>Barcode</th>

                <th>SKU</th>

                <th>Name</th>

                <th>Stock</th>

            </tr>

            </thead>

            <tbody>

            {

                products.map(

                    p=>

                    <tr
                        key={p.id}
                    >

                        <td>
                            {p.barcode}
                        </td>

                        <td>
                            {p.sku}
                        </td>

                        <td>
                            {p.name}
                        </td>

                        <td>
                            {p.stock}
                        </td>

                    </tr>

                )

            }

            </tbody>

        </table>

    );

}