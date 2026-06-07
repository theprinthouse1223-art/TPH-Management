import {
    useState
} from "react";

import {
    printBulkLabels
} from "../../services/barcodeLabelService";

export default function BulkBarcodePrintPage(){

    const [quantity,
           setQuantity] =
        useState(1);

    async function print(){

        const labels = [];

        for(
            let i=1;
            i<=quantity;
            i++
        ){

            labels.push(

                "MG-"
                +
                String(i)
                    .padStart(
                        6,
                        "0"
                    )

            );

        }

        await printBulkLabels(
            labels
        );

    }

    return(

        <div>

            <h1>

                Bulk Barcode Printing

            </h1>

            <input

                type="number"

                value={quantity}

                onChange={
                    e=>
                    setQuantity(

                        Number(
                            e.target.value
                        )

                    )
                }

            />

            <button

                onClick={
                    print
                }

            >

                Print Labels

            </button>

        </div>

    );

}