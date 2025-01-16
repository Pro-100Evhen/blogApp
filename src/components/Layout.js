import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
   return (
      <main className="bg-gray-700">
         <Header />
         <Outlet />
      </main>
   );
};

export default Layout;
