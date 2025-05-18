import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between p-2" style={{ backgroundColor: "#f5f5f5", height: "50px" }}>
      <img src={logo} alt="Logo" className="w-12 h-auto" />
      <button onClick={()=>setToken('')} className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
