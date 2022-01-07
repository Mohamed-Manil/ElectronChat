import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-row mx-auto justify-around w-20 bg-gray-400 p-2 rounded-2xl">
      <span className="circle animate-loader"></span>
      <span className="circle animate-loader animation-delay-200"></span>
      <span className="circle animate-loader animation-delay-400"></span>
    </div>
  );
};

export default Loader;
