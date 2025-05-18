import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItems = ({ _id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${_id}`}  
      className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      {/* Product Image */}
      <div className="relative pb-2/3">
        <img
          src={image[0]}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Product Name and Price */}
      <div className="p-4">
        <p className="text-lg font-semibold text-gray-800 truncate">{name}</p>
        <p className="mt-2 text-xl font-bold text-green-600">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItems;
