import React from "react";

import Sidebar from "../components/sidebar/Sidebar";
import Frame from "../components/Frame";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Frame />
      <div className="flex flex-row flex-grow">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
