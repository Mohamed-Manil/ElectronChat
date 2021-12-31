import React, { useEffect } from "react";

import HomeMenuList from "../components/menuList/HomeMenuList";
import ChannelsDisplay from "../components/Channels/ChannelsDisplay";

import { fetchChats } from "../api/chats";

const HomeView = () => {
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <>
      <HomeMenuList />
      <ChannelsDisplay />
    </>
  );
};

export default HomeView;
