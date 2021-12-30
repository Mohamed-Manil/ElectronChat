import React from "react";

import MainLayout from "../views/MainLayout";
import FrameLayout from "../views/FrameLayout";
import Home from "../views/Home";
import Chat from "../views/Chat";
import Settings from "../views/Settings";
import Login from "../views/Login";
import Register from "../views/Register";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<FrameLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
