import React from "react";

const ChatInput = () => {
  return (
    <div className="flex flex-row">
      <input
        type="text"
        className="rounded-lg w-full"
        placeholder="whrite your message"
      />
      <button
        type="button"
        className="p-1 w-16 ml-2 text-center box-border align-middle bg-blue-500 text-gray-50 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block transform rotate-45 mb-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;
