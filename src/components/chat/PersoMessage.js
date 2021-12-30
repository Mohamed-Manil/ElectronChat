import React from "react";

const PersoMessage = () => {
  return (
    <div className="grid grid-cols-gridMessage col-start-2 justify-self-end">
      <div className="h-32 bg-red-500 w-32 rounded-t-lg rounded-bl-lg"></div>
      <div className="w-9 h-9 rounded-ful self-end ml-2">
        <img
          className="object-cover w-9 h-9 rounded-full"
          src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
      </div>
      <div className="col-start-1 ml-auto text-gray-400">ss</div>
    </div>
  );
};

export default PersoMessage;
