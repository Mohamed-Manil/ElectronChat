import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const UserDropDown = ({ user }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="relative w-14 h-14">
      {toggleMenu && (
        <div className="w-52 bg-gray-darkest absolute bottom-20 z-10 text-gray-50 rounded-lg pt-3 pb-3 pl-5 pr-5 shadow-md transition duration-75 before:absolute before:w-4 before:h-4 before:bg-gray-darkest before:-bottom-2 before:rotate-45">
          <h3 className="text-center pb-3 font-medium text-lg">
            {user.username}
          </h3>
          <ul>
            <li className="pl-2 pt-2 pb-2 flex flex-row list-none items-center hover:bg-gray-default rounded-lg group cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 opacity-50 transition group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>my acount</span>
            </li>
            <li
              className="pl-2 pt-2 pb-2 flex flex-row list-none items-center hover:bg-gray-default rounded-lg group cursor-pointer"
              onClick={() => {
                dispatch(logout());
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2 opacity-50 transition group-hover:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>logout</span>
            </li>
          </ul>
        </div>
      )}
      <div
        className="relative w-14 h-14 rounded-full overflow-hidden cursor-pointer"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <img src={user.avatar} className="" />
      </div>
    </div>
  );
};

export default UserDropDown;
