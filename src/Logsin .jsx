import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [isAdmin, setIsAdmin] = useState(false); // State to toggle between User and Admin login

  return (
    <>
    
    <div className=" min-h-screen p-5">
         <NavLink to="/"> <img src="/image/new.png" alt="logo" className="h-18 w-32 cursor-pointer mr-4" /></NavLink>
      <h1 className="text-4xl font-bold underline text-center my-5">Login</h1>

      <div className="flex flex-col px-4 sm:px-6 items-center lg:px-8">
        {/* Toggle between User and Admin */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setIsAdmin(false)}
            className={`px-6 py-2 rounded-full ${
              !isAdmin
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            } transition duration-300`}
          >
            User Login
          </button>
          <button
            onClick={() => setIsAdmin(true)}
            className={`px-6 py-2 rounded-full ${
              isAdmin
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            } transition duration-300`}
          >
            Admin Login
          </button>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 lg:h-96 lg:w-4/12">
          <h2 className="text-2xl font-semibold text-center mb-4">
            {isAdmin ? "Admin Login" : "User Login"}
          </h2>

          <label className="p-2 font-semibold">Email</label>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Email"
            required
            className="bg-gray-200 rounded-lg p-2 lg:w-3/4 m-2"
          />
          <br />
          <label className="p-2 font-semibold">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="bg-gray-200 rounded-lg p-2 lg:w-3/4 m-2"
          />
          <br />

          <NavLink to={isAdmin ? "/dashboard" : "/"}>
            <button className="px-6 py-3 my-8 bg-blue-600 text-white rounded-full hover:text-black transition duration-300 transform hover:-translate-y-2">
              Login
            </button>
          </NavLink>

          <div>
            {isAdmin
              ? "Admin access only."
              : "Don't have an account?"}
            {!isAdmin && (
              <NavLink
                to="/Register"
                className="text-gray-500 hover:text-black"
              >
                {" "}
                Register.
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Login;
