import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ idItem } = {}) => {
  const dummyImageUrl = "https://via.placeholder.com/150";
  const navigate = useNavigate();
  return (
    <>
      <input
        type="radio"
        name="navItem"
        id={idItem}
        className="absolute -left-full checked:bg-red"
        onClick={() => navigate("/chat/1")}
      />
      <label htmlFor={idItem}>
        <div className="flex relative flex-col h-full">
          <div className="absolute left-0 top-1/2 w-1 h-4/5 bg-white rounded-r-lg transform -translate-y-1/2"></div>
          <img
            src={dummyImageUrl}
            alt="itm"
            className="my-auto mx-auto w-2/3 rounded-full"
          />
        </div>
      </label>
    </>
  );
};

export default Item;
