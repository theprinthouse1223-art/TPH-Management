import ExcelJS from "exceljs";

export async function exportTable(

    sheetName,

    columns,

    rows

){

    const workbook =
        new ExcelJS.Workbook();

    const sheet =
        workbook.addWorksheet(
            sheetName
        );

    sheet.columns =
        columns;

    rows.forEach(

        row=>{

            sheet.addRow(
                row
            );

        }

    );

    return workbook.xlsx.writeBuffer();

}