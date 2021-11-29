import React from "react";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const UserItem = () => {
  const isTruncated = (el) => {
    return el.scrollWidth > el.clientWidth;
  };

  return (
    <div className="flex flex-row mt-3 mx-auto w-11/12 p-1 rounded-lg hover:bg-gray-dark">
      <div className="relative inline-block w-10 h-10">
        <img
          className="inline-block object-cover w-9 h-9 rounded-full"
          src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />
        <span className="absolute bottom-0 right-0 inline-block w-4 h-4 bg-green-600 border-2 border-gray-darkestV rounded-full"></span>
      </div>
      <Tippy content="Hello" theme="darkTippy" delay={[1000, 200]}>
        <span className="text-gray-light self-center ml-3 truncate relative inline-block cursor-default">
          Haddadi Mohamed Manil
        </span>
      </Tippy>
    </div>
  );
};

export default UserItem;
