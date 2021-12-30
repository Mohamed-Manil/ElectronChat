import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-gridMain overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
