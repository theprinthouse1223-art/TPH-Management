export default function BarcodeLabel(
    {
        barcode
    }
) {

    return (

        <div>

            <h2>

                Barcode Label

            </h2>

            <p>

                {barcode}

            </p>

            <button>

                Print Label

            </button>

        </div>

    );

}