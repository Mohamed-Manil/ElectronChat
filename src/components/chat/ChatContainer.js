import React from "react";
import ChatInput from "./ChatInput";
import PersoMessage from "./PersoMessage";
import PeopleMessage from "./PeopleMessage";

const ChatContainer = () => {
  return (
    <div className="bg-gray-dark flex flex-col overflow-auto overflow-x-hidden w-full h-full ">
      <div className="p-3 h-full flex flex-col-reverse overflow-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-darkest scrollbar-track-gray-darkestV scrollbar-thumb-rounded-md">
        <div className="grid grid-cols-2">
          <PersoMessage />
          <PeopleMessage />
          <PeopleMessage />
          <PeopleMessage />
          <PeopleMessage />
          <PeopleMessage />
        </div>
      </div>
      <div className="mt-auto p-3">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatContainer;
