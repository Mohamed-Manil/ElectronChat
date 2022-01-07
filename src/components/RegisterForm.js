import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/auth";

const Register = ({ toggle }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };
  return (
    <form
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-gray-50 text-xl">Create an account</h1>
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
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark"
            id="username"
            type="text"
            placeholder="Username"
            {...register("username")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-50 text-sm font-bold mb-2"
            htmlFor="avatar"
          >
            Avatar
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-dark"
            id="avatar"
            type="text"
            placeholder="Avatar URL"
            {...register("avatar")}
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
            Sign Up
          </button>
          <div className="text-white">
            Already a member ?
            <p
              className="inline-block align-baseline font-bold text-sm hover:text-blue-dark ml-1 hover:cursor-pointer"
              onClick={() => {
                toggle();
              }}
            >
              Loggin
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
