import React, { useEffect } from "react";

import HomeMenuList from "../components/menuList/HomeMenuList";
import ChannelsDisplay from "../components/Channels/ChannelsDisplay";
import Notification from "../utils/notification";

const HomeView = () => {
  useEffect(() => {
    Notification.setup();
  });
  return (
    <>
      <HomeMenuList />
      <ChannelsDisplay />
    </>
  );
};

export default HomeView;
