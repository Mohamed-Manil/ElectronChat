import React from "react";

const LogoItem = ({ idItem }) => {
  return (
    <>
      <input
        type="radio"
        name="navItem"
        id={idItem}
        className="absolute -left-full"
      />
      <label htmlFor={idItem}>
        <div className="flex relative flex-col h-full">
          <div className="absolute left-0 top-1/2 w-1 h-4/5 bg-white rounded-r-lg transform -translate-y-1/2"></div>
          <div
            className="my-auto mx-auto text-white font-logoFont bg-blue-500 rounded-full flex justify-center items-center"
            style={{ width: "3.33333rem", height: "3.33333rem" }}
          >
            <div className="text-2xl">Ce</div>
          </div>
        </div>
      </label>
    </>
  );
};

export default LogoItem;
