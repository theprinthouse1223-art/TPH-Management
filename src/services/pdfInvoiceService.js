import {
    PDFDocument,
    StandardFonts
} from "pdf-lib";

export async function generateInvoicePdf(
    invoice
){

    const pdf =
        await PDFDocument.create();

    const page =
        pdf.addPage(
            [595,842]
        );

    const font =
        await pdf.embedFont(
            StandardFonts.Helvetica
        );

    page.drawText(

        "THE PRINT HOUSE",

        {

            x:50,

            y:780,

            size:22,

            font

        }

    );

    page.drawText(

        "Invoice : "
        + invoice.invoiceNo,

        {

            x:50,

            y:740,

            size:14,

            font

        }

    );

    page.drawText(

        "Customer : "
        + invoice.customer,

        {

            x:50,

            y:710,

            size:14,

            font

        }

    );

    return await pdf.save();

}