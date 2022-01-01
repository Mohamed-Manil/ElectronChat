import React from "react";

const ChannelLoading = () => {
  return (
    <div className="flex flex-col w-72 h-80 rounded-lg bg-gray-darkest">
      <div className="animate-pulse">
        <div className="w-full relative h-36">
          <div className="object-cover w-full bg-gray-default h-full rounded-t-lg"></div>
          <div className="absolute -bottom-4 left-5 w-12 h-12 rounded-lg bg-gray-dark"></div>
        </div>
        <div className="h-2 w-3/4 mx-3 mt-6 bg-gray-default rounded"></div>
        <div className="mx-3 mt-10 space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-gray-default rounded col-span-2"></div>
            <div className="h-2 bg-gray-default rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-gray-default rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ChannelLoading;
