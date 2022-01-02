import React from "react";
import { Link } from "react-router-dom";

const Register = ({ toggle }) => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4">
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
            placeholder="Avatar"
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
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <p className="text-white">
            You dont have an account ?
            <p
              className="inline-block align-baseline font-bold text-sm hover:text-blue-dark ml-1 hover:cursor-pointer"
              onClick={() => {
                toggle();
              }}
            >
              Register
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
