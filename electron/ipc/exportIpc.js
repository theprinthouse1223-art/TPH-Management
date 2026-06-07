const {
    ipcMain
} = require(
    "electron"
);

const ExcelJS =
    require(
        "exceljs"
    );

ipcMain.handle(

    "export:excel",

    async(
        event,
        config
    )=>{

        const workbook =
            new ExcelJS.Workbook();

        const sheet =
            workbook.addWorksheet(

                config.sheetName

            );

        sheet.columns =
            config.columns;

        config.rows.forEach(

            row=>

            sheet.addRow(
                row
            )

        );

        return await workbook
            .xlsx
            .writeBuffer();

    }

);