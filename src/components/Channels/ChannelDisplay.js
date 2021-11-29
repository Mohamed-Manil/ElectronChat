import React from "react";
import homeImage from "../../img/homeImage.svg";
import Channel from "./Channel";

const ChannelDisplay = () => {
  return (
    <div className="max-h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-darkest scrollbar-track-gray-darkestV scrollbar-thumb-rounded-md">
      <div className="m-3 rounded-lg relative text-center">
        <img src={homeImage} className="w-full rounded-lg" alt="home" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-titleFont text-gray-100 text-xl">
          Choose Your Channel
        </div>
      </div>
      <div className="grid-cols-gidRes grid gap-2 mx-3 justify-items-center">
        <Channel />
        <Channel />
        <Channel />
      </div>
    </div>
  );
};

export default ChannelDisplay;
