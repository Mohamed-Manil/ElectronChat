import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/auth";

const RegisterForm = ({ toggle }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };
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
