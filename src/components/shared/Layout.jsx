import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebard";
export default function Layout() {
    return(
        <div className=" flex flex-row h-screen w-screen overflow-hidden">
       <Sidebar/>
        <div className="p-4">
        {/* <div className="bg-teal-200">headder</div> */}

        <div>{<Outlet />}</div>

        </div>
        {/* <p>footer</p> */}
    </div>
    )
   
}