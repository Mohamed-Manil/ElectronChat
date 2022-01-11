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
import { listentToConnection } from "../actions/app";

const AuthRoute = ({ children }) => {
  const user = useSelector(({ auth }) => auth.user);
  return user ? children : <Navigate to="/" />;
};

const ChatApp = () => {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const isOnline = useSelector(({ app }) => app.isOnline);

  useEffect(() => {
    const unsubFromAuth = dispatch(listenToAuthChanges());
    const unSubFromConnection = dispatch(listentToConnection());
    return () => {
      unsubFromAuth();
      unSubFromConnection();
    };
  }, [dispatch]);

  if (!isOnline) {
    return (
      <LoadingView message="Application has been disconnected from internet. please reconnect" />
    );
  }
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
