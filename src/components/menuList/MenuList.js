import React from "react";
import SearchUser from "./SearchUser";
import ListUsers from "./ListUsers";
import MiniControll from "./MiniControll";
import { useLocation } from "react-router-dom";

const MenuList = () => {
  const location = useLocation();
  return (
    <div className="flex-shrink-0 flex flex-col w-60">
      <div className="flex flex-col bg-gray-darkestV w-full">
        <SearchUser />
        <hr className="w-full border-gray-darkest rounded-tl-lg mx-auto mt-3 flex-shrink-0" />
      </div>
      <ListUsers />
      <MiniControll />
    </div>
  );
};

export default MenuList;
