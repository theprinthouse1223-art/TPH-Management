import {
    Link
} from "react-router-dom";

export default function QuickActions(){

    return(

        <div>

            <h2>

                Quick Actions

            </h2>

            <p>
                <Link to="/app/orders">
                    New Customer Order
                </Link>
            </p>

            <p>
                <Link to="/app/purchase">
                    Receive Stock
                </Link>
            </p>

            <p>
                <Link to="/app/sales">
                    Open POS
                </Link>
            </p>

        </div>

    );

}