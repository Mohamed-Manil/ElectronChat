import React from "react";
import Frame from "../Frame";
import Loader from "./Loader";

const LoadingView = ({ message = "Loading" }) => {
  return (
    <div className="grid grid-rows-gridFrame bg-gray-darkest h-screen">
      <Frame />
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2top-1/2 w-3/4 bg-gray-default text-gray-50 pt-3 pb-3 rounded-lg">
        <div className="flex flex-col">
          <h1 className="text-center text-lg pb-3">{message}</h1>
          <Loader />
        </div>
      </div>
    </div>
  );
};

export default LoadingView;
