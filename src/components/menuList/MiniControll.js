import React from "react";
import { useSelector } from "react-redux";
import UserDropDown from "./UserDropDown";
import { Link, useNavigate } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const MiniControll = () => {
  const navigate = useNavigate();
  const user = useSelector(({ auth }) => auth.user);
  return (
    <div className="flex flex-row justify-between items-center p-5 w-full h-16 flex-shrink-0 bg-gray-darkestIV">
      {user ? (
        <UserDropDown user={user} />
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/")}
        >
          Login
        </button>
      )}
      <Tippy content="Stettings" theme="darkTippy">
        <Link to={"/settings"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-gray-100 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
      </Tippy>
    </div>
  );
};

export default MiniControll;
