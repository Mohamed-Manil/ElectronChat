import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import StoreProvider from "../store/StoreProvider";

import MainLayout from "../views/MainLayout";
import FrameLayout from "../views/FrameLayout";

import Home from "../views/Home";
import Chat from "../views/Chat";
import Settings from "../views/Settings";
import Welcome from "../views/Welcome";

import LoadingView from "../components/shared/LoadingView";

import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { listenToAuthChanges } from "../actions/auth";

const AuthRoute = ({ children }) => {
  const user = useSelector(({ auth }) => auth.user);
  return user ? children : <Navigate to="/" />;
};

const ChatApp = () => {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  useEffect(() => {
    dispatch(listenToAuthChanges());
  }, [dispatch]);
  if (isChecking) {
    return <LoadingView />;
  }
  return (
    <Router>
      <Routes>
        <Route element={<FrameLayout />}>
          <Route element={<MainLayout />}>
            <Route
              path="/home"
              element={
                <AuthRoute>
                  <Home />
                </AuthRoute>
              }
            />
            <Route
              path="/chat/:id"
              element={
                <AuthRoute>
                  <Chat />
                </AuthRoute>
              }
            />
          </Route>
          <Route
            path="/settings"
            element={
              <AuthRoute>
                <Settings />
              </AuthRoute>
            }
          />
          <Route path="/" element={<Welcome />} />
        </Route>
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  );
};

export default App;
