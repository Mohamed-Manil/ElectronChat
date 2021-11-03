import React from "react";

const Frame = () => {
  return (
    <div
      className="bg-blue-dark dark:bg-gray-darkest w-full h-6 flex flex-row justify-between"
      style={{ WebkitAppRegion: "drag" }}
    >
      <div
        className="my-auto ml-2 text-white text-sm font-logoFont"
        style={{ WebkitAppRegion: "drag", WebkitUserSelect: "none" }}
      >
        chat electron
      </div>
      <div
        className="flex flex-row h-full"
        style={{ WebkitAppRegion: "no-drag" }}
      >
        <button
          type="button"
          className="inset-0 border-0 outline-none shadow-none h-full w-12 flex justify-center items-center transition duration-150 ease-in-out dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:active:text-white"
          onClick={() => {
            window.windowOverLay.minimiseApp();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="bi bi-dash-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 8a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11A.5.5 0 012 8z"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="inset-0 border-0 outline-none shadow-none h-full w-12 flex justify-center items-center transition duration-150 ease-in-out dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:active:text-white"
          onClick={() => {
            window.windowOverLay.maximizeRestaureApp();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            className="bi bi-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"></path>
          </svg>
        </button>
        <button
          type="button"
          className="h-full w-12  flex justify-center items-center transition duration-150 ease-in-out dark:text-gray-400 hover:bg-red-600 dark:hover:text-white"
          onClick={() => {
            window.windowOverLay.closeApp();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M13.854 2.146a.5.5 0 010 .708l-11 11a.5.5 0 01-.708-.708l11-11a.5.5 0 01.708 0z"
            ></path>
            <path
              fillRule="evenodd"
              d="M2.146 2.146a.5.5 0 000 .708l11 11a.5.5 0 00.708-.708l-11-11a.5.5 0 00-.708 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Frame;
