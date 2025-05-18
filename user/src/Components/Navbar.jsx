import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/image/logos.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const { getCartCount, navigate, token, setToken, setCartItems } =
    useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  return (
    <div className="bg-[#f5f5f5] top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="ml-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium text-sm text-gray-700">
          <Link to="/" className="hover:text-green-600">
            <p>Home</p>
          </Link>
          <Link to="/collection" className="hover:text-green-600">
            <p>Collection</p>
          </Link>
          <Link to="/about" className="hover:text-green-600">
            <p>About</p>
          </Link>
          <Link to="/contact" className="hover:text-green-600">
            <p>Contact</p>
          </Link>
        </ul>

        {/* User Icon and Dropdown */}
        <div className="relative flex items-center space-x-4">
          {/* User Icon */}
          <div className="relative group">
            <FontAwesomeIcon
              onClick={() => (token ? null : navigate("/login"))}
              icon={faUser}
              className="text-gray-700 text-xl cursor-pointer hover:text-green-600"
            />

            {/* Dropdown Menu */}
            {token && (
              <div className="absolute right-0 bg-white shadow-md rounded-lg mt-2 z-20 w-40 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-200">
                <p
                  onClick={() => navigate("/profile")}
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 rounded-t-lg cursor-pointer transition duration-200 text-sm"
                >
                  Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 cursor-pointer transition duration-200 text-sm"
                >
                  Orders
                </p>
                <p
                  onClick={logout}
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 rounded-b-lg cursor-pointer transition duration-200 text-sm"
                >
                  Logout
                </p>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <Link to="/cart" className="relative ml-[-10px]">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-gray-700 text-xl cursor-pointer hover:text-green-600"
            />
            <p className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getCartCount()}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
