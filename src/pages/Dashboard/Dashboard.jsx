import KPIBox from "./KPIBox";

export default function Dashboard(){

    return(

        <div>

            <h1>

                THE PRINT HOUSE ERP

            </h1>

            <hr/>

            <KPIBox

                title="Today's Sales"

                value="₹0"

            />

            <KPIBox

                title="Pending Orders"

                value="0"

            />

            <KPIBox

                title="Ready For Billing"

                value="0"

            />

            <KPIBox

                title="Low Stock"

                value="0"

            />

        </div>

    );

}