export default function QuickReports(){

    return(

        <div>

            <h2>

                Quick Reports

            </h2>

            <button

    onClick={
        exportInventory
    }

>

    Export Inventory

</button>

            <button>

                Export Sales

            </button>

            <button>

                Export Orders

            </button>

            <button>

                Export Production

            </button>

            <button>

                Export Raw Materials

            </button>

        </div>

    );

    async function exportInventory(){

    const products =
        await loadProducts();

    await exportTable(

        "Inventory",

        columns,

        products

    );

}

}