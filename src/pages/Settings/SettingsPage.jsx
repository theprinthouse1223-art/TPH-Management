import BackupPage from "./BackupPage";

export default function SettingsPage(){

    return(

        <div>

            <h1>

                Settings

            </h1>

            <ul>

                <li>

                    Thermal Printer

                </li>

                <li>

                    Barcode Printer

                </li>

                <li>

                    A4 Printer

                </li>

                <li>

                    Backup

                </li>

            </ul>

            <hr/>

<BackupPage/>

        </div>

    );

}