import React, { useEffect } from "react";

import HomeMenuList from "../components/menuList/HomeMenuList";
import ChannelsDisplay from "../components/Channels/ChannelsDisplay";
debugger;
import { fetchChats } from "../api/chats";

const HomeView = () => {
  useEffect(() => {
    fetchChats();
    console.log("hi");
  }, []);
  return (
    <>
      <HomeMenuList />
      <ChannelsDisplay />
    </>
  );
};

export default HomeView;
