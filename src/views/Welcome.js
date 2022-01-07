import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import LoadingView from "../components/shared/LoadingView";
import { Navigate } from "react-router-dom";

const Welcome = () => {
  const [isLoginView, setIsLogin] = useState(true);
  const user = useSelector(({ auth }) => auth.user);
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  const toggleLoginRegister = () => {
    setIsLogin(!isLoginView);
  };
  if (isChecking) {
    return <LoadingView message={"Just one moment please."} />;
  }
  if (user) {
    return <Navigate to="/home" />;
  }
  return (
    <div className="relative">
      {/* <div
        className="absolute right-10 top-10 cursor-pointer flex flex-col content-center"
        onClick={() => {
          navigate(-1);
        }}
      >
        <div className="p-2 rounded-full border-2 border-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="text-center text-gray-400">ESC</span>
      </div> */}
      {/* replace here */}
      <h3 onClick={() => console.log(isChecking, user)}>click me</h3>
      {isLoginView ? (
        <LoginForm toggle={toggleLoginRegister} />
      ) : (
        <RegisterForm toggle={toggleLoginRegister} />
      )}
    </div>
  );
};

export default Welcome;
