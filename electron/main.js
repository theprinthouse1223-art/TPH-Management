const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
        width: 1400,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, "preload.js")
        }
    });

    window.loadURL("http://localhost:5173");
}

app.whenReady().then(()=>{

    registerProductIpc();

    registerReportIpc();

    createWindow();

    registerSearchIpc();

    registerProductionIpc();

    registerBarcodeIpc();

});

const registerProductIpc =
    require(
        "./ipc/productIpc"
    );

const registerReportIpc =
    require(
        "./ipc/reportIpc"
    );

const registerSearchIpc =
    require(
        "./ipc/searchIpc"
    );

const registerProductionIpc =
    require(
        "./ipc/productionIpc"
    );

const registerBarcodeIpc =
    require(
        "./ipc/barcodeIpc"
    );