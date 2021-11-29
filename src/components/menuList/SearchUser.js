import React from "react";

const SearchUser = () => {
  return (
    <div className="mt-3 mx-auto w-11/12">
      <input
        type="text"
        className="bg-gray-darkest h-6 w-full px-5 pr-16 rounded-md text-sm focus:outline-none text-gray-light"
        placeholder="Search User"
      />
    </div>
  );
};

export default SearchUser;
