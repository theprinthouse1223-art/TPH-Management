const fs = require("fs");
const path = require("path");

function createBackup(){

    const database =
        path.join(
            process.cwd(),
            "prisma",
            "inventory.db"
        );

    const backupFolder =
        path.join(
            process.cwd(),
            "backups"
        );

    if(
        !fs.existsSync(
            backupFolder
        )
    ){

        fs.mkdirSync(
            backupFolder
        );

    }

    const fileName =

        "backup-"

        +

        Date.now()

        +

        ".db";

    const destination =

        path.join(

            backupFolder,

            fileName

        );

    fs.copyFileSync(

        database,

        destination

    );

    return destination;

}

module.exports = {

    createBackup

};