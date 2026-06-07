import {
    useEffect,
    useState
} from "react";

import {
    loadProductionDashboard
} from "../../services/productionDashboardService";

export default function ProductionDashboard(){

    const [data,
           setData] =
        useState({});

    useEffect(()=>{

        async function load(){

            const result =

                await loadProductionDashboard();

            setData(
                result
            );

        }

        load();

    },[]);

    return(

        <div>

            <h1>

                Production Dashboard

            </h1>

            <table border="1">

                <tbody>

                <tr>

                    <td>
                        Pending
                    </td>

                    <td>
                        {
                            data.PENDING
                        }
                    </td>

                </tr>

                <tr>

                    <td>
                        Design
                    </td>

                    <td>
                        {
                            data.DESIGN
                        }
                    </td>

                </tr>

                <tr>

                    <td>
                        Printing
                    </td>

                    <td>
                        {
                            data.PRINTING
                        }
                    </td>

                </tr>

                <tr>

                    <td>
                        Laser
                    </td>

                    <td>
                        {
                            data.LASER
                        }
                    </td>

                </tr>

                <tr>

                    <td>
                        Framing
                    </td>

                    <td>
                        {
                            data.FRAMING
                        }
                    </td>

                </tr>

                <tr>

                    <td>
                        Packing
                    </td>

                    <td>
                        {
                            data.PACKING
                        }
                    </td>

                </tr>

                <tr>

                    <td>
                        Ready
                    </td>

                    <td>
                        {
                            data.READY
                        }
                    </td>

                </tr>

                </tbody>

            </table>

        </div>

    );

}