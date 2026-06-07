const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld(
    "tph",
    {
        version: "0.1.0"
    }
);