import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faList, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#f5f5f5] p-4 h-screen w-60 text-gray-800">
      <div>
        <Link
          to="/add"
          className="flex items-center space-x-2 py-2  hover:bg-gray-200 rounded transition"
        >
          <FontAwesomeIcon icon={faPlusCircle} className="text-green-600 text-xl" />
          <p className="pb-1">Add Product</p>
        </Link>
        <hr className="my-2 border-gray-300" />
        
        <Link
          to="/list"
          className="flex items-center space-x-2 py-2  hover:bg-gray-200 rounded transition"
        >
          <FontAwesomeIcon icon={faList} className="text-blue-600 text-xl" />
          <p className="pb-1">List Products</p>
        </Link>
        <hr className="my-2 border-gray-300" />
        
        <Link
          to="/order"
          className="flex items-center space-x-2 py-2 hover:bg-gray-200 rounded transition"
        >
          <FontAwesomeIcon icon={faCartPlus} className="text-yellow-600 text-xl" />
          <p className="pb-1">Order Products</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
