import KPIBox from "./KPIBox";

import {
    useEffect,
    useState
} from "react";

import KPIBox from "./KPIBox";

import {
    getDashboardData
} from "../../services/reportService";

import QuickReports from "./QuickReports";

export default function Dashboard(){

    const [data,setData] =
        useState({

            todaySales:0,

            lowStock:0,

            pendingOrders:0,

            readyForBilling:0

        });

    useEffect(()=>{

        async function load(){

            const result =

                await getDashboardData();

            setData(result);

        }

        load();

    },[]);

    return(

        <div>

            <h1>

                THE PRINT HOUSE ERP

            </h1>

            <hr/>

            <div
                style={{
                    display:"flex",
                    flexWrap:"wrap"
                }}
            >

                <KPIBox
                    title="Today's Sales"
                    value={
                        `₹${data.todaySales}`
                    }
                />

                <KPIBox
                    title="Pending Orders"
                    value={
                        data.pendingOrders
                    }
                />

                <KPIBox
                    title="Ready For Billing"
                    value={
                        data.readyForBilling
                    }
                />

                <KPIBox
                    title="Low Stock"
                    value={
                        data.lowStock
                    }
                />

            </div>

            <hr/>

<QuickReports/>

        </div>

    );

}