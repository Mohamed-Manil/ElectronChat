import React from "react";

const Theme = () => {
  return (
    <div className="flex flex-col">
      <h5>Thmes :</h5>
      <div className="grid grid-cols-3 place-content-start m-0 p-4 box-border">
        <label className="flex items-center rounded-3xl mt-2 mr-0 cursor-pointer transition duration-75">
          <input
            type="radio"
            className="absolute peer left-0 top-0 w-px h-px opacity-0 -z-10"
            name="rad"
          />
          <div className="w-6 h-6 rounded-full relative bg-blue-600 before:inline-block before:w-6 before:h-6 before:rounded-full before:bg-gray-300 before:scale-110 before:transition before:duration-100 peer-checked:before:scale-0"></div>
          <div className="ml-4">Light</div>
        </label>
        <label className="flex items-center rounded-3xl mt-2 mr-0 cursor-pointer transition duration-75">
          <input
            type="radio"
            className="absolute peer left-0 top-0 w-px h-px opacity-0 -z-10"
            name="rad"
          />
          <div className="w-6 h-6 rounded-full relative bg-blue-600 before:inline-block before:w-6 before:h-6 before:rounded-full before:bg-gray-300 before:scale-110 before:transition before:duration-100 peer-checked:before:scale-0"></div>
          <div className="ml-4">Dark</div>
        </label>
        <label className="flex items-center rounded-3xl mt-2 mr-0 cursor-pointer transition duration-75">
          <input
            type="radio"
            className="absolute peer left-0 top-0 w-px h-px opacity-0 -z-10"
            name="rad"
          />
          <div className="w-6 h-6 rounded-full relative bg-blue-600 before:inline-block before:w-6 before:h-6 before:rounded-full before:bg-gray-300 before:scale-110 before:transition before:duration-100 peer-checked:before:scale-0"></div>
          <div className="ml-4">System</div>
        </label>
      </div>
    </div>
  );
};

export default Theme;
