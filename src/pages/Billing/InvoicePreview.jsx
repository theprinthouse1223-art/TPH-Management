export default function InvoicePreview(
    {
        invoiceNo
    }
){

    return(

        <div>

            <h1>

                Invoice Preview

            </h1>

            <p>

                {invoiceNo}

            </p>

            <button>

                Print Invoice

            </button>

        </div>

    );

}