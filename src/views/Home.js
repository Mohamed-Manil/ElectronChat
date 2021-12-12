import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import MenuList from "../components/menuList/MenuList";
import ChannelsDisplay from "../components/Channels/ChannelsDisplay";

const HomeView = () => {
  return (
    <div className="grid grid-cols-gridMain overflow-hidden">
      <Sidebar />
      <MenuList />
      <ChannelsDisplay />
    </div>
  );
};

export default HomeView;
