const {
    contextBridge,
    ipcRenderer
} = require("electron");

contextBridge.exposeInMainWorld(
    "tph",
    {

        products:{

            getAll:()=>
                ipcRenderer.invoke(
                    "products:getAll"
                ),

            create:(data)=>
                ipcRenderer.invoke(
                    "products:create",
                    data
                ),

            update:(id,data)=>
                ipcRenderer.invoke(
                    "products:update",
                    id,
                    data
                ),

            delete:(id)=>
                ipcRenderer.invoke(
                    "products:delete",
                    id
                )

        },

        reports: {

    getDashboardData: () =>
        ipcRenderer.invoke(
            "reports:dashboard"
        )

},

search:{

    search:(text)=>

        ipcRenderer.invoke(

            "search:all",

            text

        )

},

production: {

    dashboard: () =>
        ipcRenderer.invoke(
            "production:dashboard"
        ),

    moveNext: (orderId) =>
        ipcRenderer.invoke(
            "production:moveNext",
            orderId
        )

},

barcode:{

    generate:(barcode)=>

        ipcRenderer.invoke(

            "barcode:generate",

            barcode

        ),

    generateBulk:(barcodes)=>

        ipcRenderer.invoke(

            "barcode:bulk",

            barcodes

        )

},

exports:{

    excel:(config)=>

        ipcRenderer.invoke(

            "export:excel",

            config

        )

}

    }
);

