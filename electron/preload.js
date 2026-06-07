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

        }

    }
);