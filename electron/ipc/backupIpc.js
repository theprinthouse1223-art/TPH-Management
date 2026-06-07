const {
    ipcMain
} = require(
    "electron"
);

const {

    createBackup

} = require(
    "../services/backupService"
);

function registerBackupIpc(){

    ipcMain.handle(

        "backup:create",

        async()=>{

            return createBackup();

        }

    );

}

module.exports =
    registerBackupIpc;