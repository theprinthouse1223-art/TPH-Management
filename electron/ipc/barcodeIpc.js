const {
    ipcMain
} = require("electron");

const bwipjs =
    require("bwip-js");

function registerBarcodeIpc(){

    ipcMain.handle(

        "barcode:generate",

        async(
            event,
            barcode
        )=>{

            return bwipjs.toBuffer({

                bcid:"code128",

                text:barcode,

                scale:3,

                height:10,

                includetext:true

            });

        }

    );

    ipcMain.handle(

        "barcode:bulk",

        async(
            event,
            barcodes
        )=>{

            const labels = [];

            for(
                const barcode
                of barcodes
            ){

                labels.push(

                    await bwipjs.toBuffer({

                        bcid:"code128",

                        text:barcode,

                        scale:3,

                        height:10,

                        includetext:true

                    })

                );

            }

            return labels;

        }

    );

}

module.exports =
    registerBarcodeIpc;