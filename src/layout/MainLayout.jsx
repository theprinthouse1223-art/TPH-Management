import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function MainLayout(){

    return(

        <div
            style={{
                display:"flex"
            }}
        >

            <Sidebar/>

            <div
                style={{
                    padding:20,
                    flex:1
                }}
            >

                <Outlet/>

            </div>

        </div>

    );

}