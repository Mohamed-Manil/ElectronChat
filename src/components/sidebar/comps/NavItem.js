import React from "react";

const Item = ({ idItem, typeItem = "0" } = {}) => {
  const dummyImageUrl = "https://via.placeholder.com/150";
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
          {typeItem === "0" ? (
            <div
              className="my-auto mx-auto text-white font-logoFont bg-blue-500 rounded-full flex justify-center items-center"
              style={{ width: "3.33333rem", height: "3.33333rem" }}
            >
              <div className="text-2xl">Ce</div>
            </div>
          ) : (
            <img
              src={dummyImageUrl}
              alt="itm"
              className="my-auto mx-auto w-2/3 rounded-full"
            />
          )}
        </div>
      </label>
    </>
  );
};

export default Item;
