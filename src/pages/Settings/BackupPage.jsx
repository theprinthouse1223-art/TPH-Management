import {
    createBackup
} from "../../services/backupService";

export default function BackupPage(){

    async function backup(){

        const result =

            await createBackup();

        alert(

            "Backup Created\n\n"

            +

            result

        );

    }

    return(

        <div>

            <h1>

                Database Backup

            </h1>

            <button

                onClick={
                    backup
                }

            >

                Create Backup

            </button>

        </div>

    );

}