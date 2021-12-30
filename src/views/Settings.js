import React from "react";
import Theme from "../components/settings/Theme";
import Notification from "../components/settings/Notification";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="relative text-gray-50">
      <div
        className="absolute right-10 top-10 cursor-pointer flex flex-col content-center"
        onClick={() => {
          navigate(-1);
        }}
      >
        <div className="p-2 rounded-full border-2 border-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <span className="text-center text-gray-400">ESC</span>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-gray-500 w-11/12 p-4">
        <h1 className="text-2xl mb-2">Adjust application settings</h1>
        <Theme />
        <Notification />
      </div>
    </div>
  );
};

export default Settings;
