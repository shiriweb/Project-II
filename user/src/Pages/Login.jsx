import React, { useState, useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const onSubmitHandler = async (event) => {
  event.preventDefault();
  try {
    if (currentState === "Sign Up") {
      const response = await axios.post(backendUrl + "/api/user/register", {
        name,
        email,
        password,
      });
      if (response.data.success) {
        alert("Signup successful! Please login.");
        setCurrentState("Login");  // switch to login form
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert(response.data.message);
      }
    } else {
      const response = await axios.post(backendUrl + "/api/user/login", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/"); // Redirect after login success
      } else {
        alert(response.data.message);
      }
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};

  return (
    <form
      onSubmit={onSubmitHandler}
      className="w-[350px] p-6 bg-[#f5f5f5] rounded-lg shadow-md space-y-4 mx-auto my-12"
    >
      <div className="mb-4 text-center">
        <p className="text-xl font-semibold text-green-600">{currentState}</p>
      </div>

      {currentState === "Sign Up" && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <div className="text-center">
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="text-sm text-green-600 cursor-pointer"
          >
            Don't have an account? Sign Up
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="text-sm text-green-600 cursor-pointer"
          >
            Already have an account? Login
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full p-3 bg-green-600 text-white text-lg rounded-md hover:bg-green-700"
      >
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
