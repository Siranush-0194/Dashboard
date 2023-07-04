import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <div>
        <div className="bg-sky-10"> sidebar </div>
        <div className="bg-teal-200">headder</div>
        <div>{<Outlet />}</div>
    </div>
    )
   
}