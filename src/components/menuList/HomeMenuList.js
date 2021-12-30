import React from "react";
import MiniControll from "./MiniControll";

const HomeMenuList = () => {
  return (
    <div className="flex-shrink-0 flex flex-col w-60">
      <div className="flex flex-col h-full w-60 bg-gray-darkestV overflow-auto "></div>
      <MiniControll />
    </div>
  );
};

export default HomeMenuList;
