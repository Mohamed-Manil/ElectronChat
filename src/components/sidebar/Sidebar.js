import React from "react";
import Navitem from "./comps/NavItem";

const Sidebar = () => {
  return (
    <div className="flex flex-row h-full">
      <nav className="bg-blue-dark dark:bg-gray-darkest w-20 h-screen flex flex-col">
        <Navitem idItem="logo" />
        <hr className="w-1/2 mx-auto border-gray-700 mt-2 mb-2" />
        <Navitem idItem="logo2" typeItem={"1"} />
      </nav>
    </div>
  );
};

export default Sidebar;
