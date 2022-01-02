import React from "react";

import { Provider } from "react-redux";

import MainLayout from "../views/MainLayout";
import FrameLayout from "../views/FrameLayout";

import Home from "../views/Home";
import Chat from "../views/Chat";
import Settings from "../views/Settings";
import Welcome from "../views/Welcome";

import configureStore from "../store";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<FrameLayout />}>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/chat/:id" element={<Chat />} />
            </Route>
            <Route path="/settings" element={<Settings />} />
            <Route path="/" element={<Welcome />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
