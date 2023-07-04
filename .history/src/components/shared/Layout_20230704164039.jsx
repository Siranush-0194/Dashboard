import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    // return(
    //     <div>
    //     <div>
    //         sidebar
    //     </div>
    //     <div>headder</div>
    //     <div>{<Outlet />}</div>
    // </div>
    // )
    return (
        <div>
          <h1>Layout</h1>
          <Outlet /> {/* Renders the child components */}
        </div>
      );
   
}