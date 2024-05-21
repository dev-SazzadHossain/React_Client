import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="xl:w-[1520px] xl:mx-auto lg:w-[1320px] lg:mx-auto md:w-full sm:w-full w-full xl:px-0 lg:px-0 px-5">
        <Outlet />
        <div>Footer</div>
      </div>
    </div>
  );
};

export default Layout;
