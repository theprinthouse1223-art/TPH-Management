import { useState } from "react";

export default function ProductForm(
    {
        onSave
    }
){

    const [name,setName] =
        useState("");

    const [category,setCategory] =
        useState("MUG");

    const [purchasePrice,
           setPurchasePrice] =
        useState(0);

    const [sellingPrice,
           setSellingPrice] =
        useState(0);

    const [stock,setStock] =
        useState(0);

    const [minimumStock,
           setMinimumStock] =
        useState(0);

    return(

        <div>

            <input
                placeholder="Name"
                value={name}
                onChange={
                    e=>setName(
                        e.target.value
                    )
                }
            />

            <br/>

            <select
                value={category}
                onChange={
                    e=>setCategory(
                        e.target.value
                    )
                }
            >

                <option>MUG</option>
                <option>FRAME</option>
                <option>SHIRT</option>
                <option>KEYCHAIN</option>
                <option>BOTTLE</option>

            </select>

            <br/>

            <input
                placeholder="Purchase Price"
                onChange={
                    e=>
                    setPurchasePrice(
                        Number(
                            e.target.value
                        )
                    )
                }
            />

            <br/>

            <input
                placeholder="Selling Price"
                onChange={
                    e=>
                    setSellingPrice(
                        Number(
                            e.target.value
                        )
                    )
                }
            />

            <br/>

            <input
                placeholder="Opening Stock"
                onChange={
                    e=>
                    setStock(
                        Number(
                            e.target.value
                        )
                    )
                }
            />

            <br/>

            <input
                placeholder="Minimum Stock"
                onChange={
                    e=>
                    setMinimumStock(
                        Number(
                            e.target.value
                        )
                    )
                }
            />

            <br/>

            <button

                onClick={()=>

                    onSave({

                        name,

                        category,

                        purchasePrice,

                        sellingPrice,

                        stock,

                        minimumStock

                    })

                }

            >

                Save Product

            </button>

        </div>

    );

}