import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, setshowSearch } = useContext(ShopContext);
  const location = useLocation();

  // Show search bar only on the collection page
  const showSearchBar = location.pathname.includes("collection");

  return showSearchBar ? (
    <div className="flex items-center justify-between max-w-sm mx-auto mt-4">
      <div className="flex items-center w-full">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-full bg-white px-4 py-2 rounded-l-lg shadow-sm border border-black focus:outline-none focus:ring-2 focus:ring-black text-gray-800 hover:border-gray-700 transition-all"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="text-black cursor-pointer ml-2"
        />
      </div>

      <FontAwesomeIcon
        onClick={() => setshowSearch(false)}
        icon={faTimes}
        className="text-black cursor-pointer ml-2"
      />
    </div>
  ) : null;
};

export default Searchbar;
