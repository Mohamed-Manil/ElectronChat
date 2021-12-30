import React from "react";

const Channel = () => {
  return (
    <div className="flex flex-col w-72 h-80 rounded-lg bg-gray-darkest transition ease-in-out duration-500 transform  hover:scale-101 hover:shadow-lg cursor-pointer">
      <div className="w-full relative" style={{ height: "137.6px" }}>
        <img
          src="https://via.placeholder.com/150"
          alt="img"
          className="object-cover w-full h-full rounded-t-lg"
        />
        <div className="absolute -bottom-4 left-5 w-12 h-12 rounded-lg bg-red-400"></div>
      </div>
      <h3 className="text-gray-50 mx-3 mt-6">Channel name</h3>
      <span className="mx-3 mt-2 text text-gray-300 text-sm">
        You need to open your GitHub account in your browser and the process of
        creating a new repository
      </span>
    </div>
  );
};

export default Channel;
