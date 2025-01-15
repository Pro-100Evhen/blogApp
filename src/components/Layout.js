import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
   return (
      <>
         <div className="bg-cyan-900 w-9"></div>
         <Header />
         <Outlet />
      </>
   );
};

export default Layout;
