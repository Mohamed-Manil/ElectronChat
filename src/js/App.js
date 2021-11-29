import React from "react";

import Sidebar from "../components/sidebar/Sidebar";
import MenuList from "../components/menuList/MenuList";
import MainDisplay from "../components/mainDisplay/MainDisplay";
import Frame from "../components/Frame";

const App = () => {
  return (
    <div className="flex flex-col h-screen dark:bg-gray-darkest overflow-hidden">
      <Frame />
      <div className="flex flex-row flex-grow">
        <Sidebar />
        <MenuList />
        <MainDisplay />
      </div>
    </div>
  );
};

export default App;
