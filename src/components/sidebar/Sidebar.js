import React from "react";
import ChannelItem from "./comps/ChannelItem";
import LogoItem from "./comps/LogoItem";

const Sidebar = () => {
  return (
    <nav className="bg-blue-dark dark:bg-gray-darkest w-20 flex flex-col h-full flex-shrink-0">
      <LogoItem idItem="logo" />
      <hr className="w-1/2 mx-auto border-gray-700 mt-2 mb-2" />
      <ChannelItem idItem="logo2" />
    </nav>
  );
};

export default Sidebar;
