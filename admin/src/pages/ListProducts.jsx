import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ListProducts = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        alert(response.data.message);
        setList(list.filter(item => item._id !== id)); // Update list without refetching
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="text-center text-xl font-semibold my-4">All Products List</p>
      <div className="overflow-x-auto bg-white shadow-sm rounded-lg">
        <div className="flex justify-between p-2 bg-gray-200 font-medium text-sm">
          <div className="w-1/5">Image</div>
          <div className="w-1/5">Name</div>
          <div className="w-1/5">Description</div>
          <div className="w-1/5">Category</div>
          <div className="w-1/5">Price</div>
          <div className="w-1/5 text-center">Action</div>
        </div>

        {list.length === 0 ? (
          <div className="p-4 text-center text-sm">No products available</div>
        ) : (
          list.map((item, index) => (
            <div key={index} className="flex items-center border-t border-b p-2 text-sm">
              <div className="w-1/5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
              </div>
              <div className="w-1/5">{item.name}</div>
              <div className="w-1/5">{item.description}</div>
              <div className="w-1/5">{item.category}</div>
              <div className="w-1/5">Rs {item.price}</div>
              <div className="w-1/5 text-center flex justify-center space-x-2">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                />
                <FontAwesomeIcon
                  onClick={() => removeProduct(item._id)}
                  icon={faTrash}
                  className="text-red-500 cursor-pointer hover:text-red-700"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ListProducts;
