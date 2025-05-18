import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProducts from "./pages/addProducts";
import ListProducts from "./pages/ListProducts";
import OrderProducts from "./pages/OrderProducts";
import Login from "./components/Login";
import { useEffect } from "react";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

useEffect(()=>{
  localStorage.setItem('token', token)
},[token])

  return (
    <div className="bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-full">
              <Routes>
                <Route path="/add" element={<AddProducts token={token} />} />
                <Route path="/list" element={<ListProducts token={token}/>} />
                <Route path="/order" element={<OrderProducts token={token}/>} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
