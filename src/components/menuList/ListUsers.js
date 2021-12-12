import React from "react";
import UserItem from "./UserItem";

const ListUsers = () => {
  return (
    <div className="flex flex-col h-full w-60 bg-gray-darkestV overflow-auto scrollbar-thin scrollbar-thumb-gray-darkest scrollbar-track-gray-darkestV scrollbar-thumb-rounded-md">
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  );
};

export default ListUsers;
