import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-row h-full">
      <nav className="bg-blue-dark dark:bg-gray-darkest w-20 h-screen flex flex-col">
        <div className="flex flex-row relative h-10">
          <div className="bg-white absolute w-1 h-4/5 left-0 top-1/2 transform -translate-y-1/2"></div>
          <div className="mx-auto my-auto text-white font-logoFont text-xl">
            ce
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
