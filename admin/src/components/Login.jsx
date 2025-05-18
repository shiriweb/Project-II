import axios from "axios";
import React, { useState } from "react";
import { backendUrl } from "../App";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State to display error/success message

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous message

    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      if (response.data.token) {
        setToken(response.data.token);
        setMessage("Login successful!");
      } else {
        setMessage(response.data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.log(error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f5f5]">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[350px]">
        <h1 className="text-xl font-bold text-center mb-4 text-green-600">
          Admin Panel
        </h1>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <p className="text-gray-700 mb-1">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter Email Address"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring focus:ring-green-100"
            />
          </div>

          <div>
            <p className="text-gray-700 mb-1">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter the password"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring focus:ring-green-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center font-semibold">
            <p
              className={`${
                message === "Login successful!" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
