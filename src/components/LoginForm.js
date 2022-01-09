import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/auth";
import LoadingView from "../components/shared/LoadingView";

const RegisterForm = ({ toggle }) => {
  const dispatch = useDispatch();
  const error = useSelector(({ auth }) => auth.login.error);
  const isChecking = useSelector(({ auth }) => auth.login.isChecking);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
  if (isChecking) {
    return <LoadingView message={"Just one moment please."} />;
  }
  return (
    <form
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-gray-50 text-xl">Welcome here !</h1>
      <h3 className="text-center text-gray-400">
        Login and chat with other people!
      </h3>
      <div className="px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-gray-50 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark"
            id="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-50 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark"
            id="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        {error && (
          <div className=" p-2 mb-4 rounded-lg border-2 border-pink-500 flex flex-row justify-between">
            <span className="text-pink-500">{error.message}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <div className="text-white">
            You dont have an account ?
            <p
              className="inline-block align-baseline font-bold text-sm hover:text-blue-dark ml-1 hover:cursor-pointer"
              onClick={() => {
                toggle();
              }}
            >
              Register
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
