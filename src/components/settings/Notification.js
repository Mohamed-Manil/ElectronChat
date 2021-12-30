import React from "react";

const Notification = () => {
  return (
    <div className="flex flex-col">
      <h5>Notifications :</h5>
      <div className="grid grid-cols-3 place-content-start m-0 p-4 box-border">
        <label className="inline-flex items-center">
          <input
            className="w-6 h-6 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <div className="ml-2">Enable Notification</div>
        </label>
        <label className="inline-flex items-center">
          <input
            className="w-6 h-6 mr-2 focus:ring-indigo-400 focus:ring-opacity-25 border border-gray-300 rounded"
            type="checkbox"
          />
          <div className="ml-2">Sound Notification</div>
        </label>
      </div>
    </div>
  );
};

export default Notification;
