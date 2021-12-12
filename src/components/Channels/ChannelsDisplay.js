import React from "react";
import ChannelPresentation from "./ChannelPresentation";
import GridChannels from "./GridChannels";

const ChannelDisplay = () => {
  return (
    <div className="bg-gray-dark overflow-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-darkest scrollbar-track-gray-darkestV scrollbar-thumb-rounded-md">
      <ChannelPresentation />
      <GridChannels />
    </div>
  );
};

export default ChannelDisplay;
