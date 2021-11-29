import React from "react";
import SearchUser from "./SearchUser";
import UserItem from "./UserItem";
UserItem;

const MenuList = () => {
  return (
    <div className="flex flex-col w-60 bg-gray-darkestV rounded-tl-lg">
      <SearchUser />
      <hr className="w-full border-gray-darkest mx-auto mt-3" />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  );
};

export default MenuList;
