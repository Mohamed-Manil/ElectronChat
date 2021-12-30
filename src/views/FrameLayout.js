import React from "react";
import { Outlet } from "react-router-dom";

import Frame from "../components/Frame";

const FrameLayout = () => {
  return (
    <div className="grid grid-rows-gridFrame bg-gray-darkest h-screen">
      <Frame />
      <Outlet />
    </div>
  );
};

export default FrameLayout;
