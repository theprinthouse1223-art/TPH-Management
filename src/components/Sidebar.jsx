import {
    Link
} from "react-router-dom";

export default function Sidebar(){

    return(

        <div
            style={{
                width:250,
                borderRight:"1px solid gray",
                padding:20
            }}
        >

            <h2>

                TPH ERP

            </h2>

            <p>

                <Link to="/app/dashboard">
                    Dashboard
                </Link>

            </p>

            <p>

                <Link to="/app/inventory">
                    Inventory
                </Link>

            </p>

            <p>

                <Link to="/app/purchase">
                    Purchase
                </Link>

            </p>

            <p>

                <Link to="/app/sales">
                    Sales POS
                </Link>

            </p>

            <p>

                <Link to="/app/orders">
                    Customer Orders
                </Link>

            </p>

            <p>

                <Link to="/app/production">
                    Production
                </Link>

            </p>

            <p>

                <Link to="/app/billing">
                    Billing
                </Link>

            </p>

            <p>

                <Link to="/app/settings">
                    Settings
                </Link>

            </p>

        </div>

    );

}