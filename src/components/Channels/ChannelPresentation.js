import React from "react";
import homeImage from "../../img/homeImage.svg";

const ChannelPresentation = () => {
  return (
    <div className="m-3 rounded-lg relative text-center">
      <img src={homeImage} className="w-full rounded-lg" alt="home" />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-titleFont text-gray-100 text-xl">
        Choose Your Channel
      </div>
    </div>
  );
};

export default ChannelPresentation;
