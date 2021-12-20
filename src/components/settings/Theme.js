import React from "react";

const Theme = () => {
  return (
    <div className="flex flex-col">
      <h3>Thmes :</h3>
      <div className="grid place-content-center m-0 p-10 box-border">
        <label className="flex items-center rounded-3xl pt-4 pr-4 mt-3 mr-0 cursor-pointer transition duration-75">
          <input
            type="radio"
            className="absolute peer left-0 top-0 w-px h-px opacity-0 -z-10"
            name="rad"
          />
          <div className="w-6 h-6 rounded-full relative bg-gray-900 before:inline-block before:w-6 before:h-6 before:rounded-full before:bg-gray-300 before:scale-110 before:transition before:duration-100 peer-checked:before:scale-0"></div>
          <div className="ml-4">Air</div>
        </label>
        <label className="flex items-center rounded-3xl pt-4 pr-4 mt-3 mr-0 cursor-pointer transition duration-75">
          <input
            type="radio"
            className="absolute peer left-0 top-0 w-px h-px opacity-0 -z-10"
            name="rad"
          />
          <div className="w-6 h-6 rounded-full relative bg-gray-900 before:inline-block before:w-6 before:h-6 before:rounded-full before:bg-gray-300 before:scale-110 before:transition before:duration-100 peer-checked:before:scale-0"></div>
          <div className="ml-4">Clouds</div>
        </label>
      </div>
    </div>
  );
};

export default Theme;
