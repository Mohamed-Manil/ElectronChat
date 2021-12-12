import Channel from "./Channel";

import React from "react";

const GridChannels = () => {
  return (
    <div className="grid-cols-gidRes grid gap-4 mx-3 justify-items-center">
      <Channel />
      <Channel />
      <Channel />
    </div>
  );
};

export default GridChannels;
