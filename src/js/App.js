import React from "react";

import Frame from "../components/Frame";
import Home from "../views/Home";
import Settings from "../views/Settings";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="grid grid-rows-gridFrame bg-gray-darkest h-screen">
        <Frame />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
