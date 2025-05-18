import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const RelatedProducts = ({ category }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const productsCopy = products.filter((item) => item.category === category);
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category]);

  return (
    <div className="w-screen px-0 left-0">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Related Products</h1>
        <p className="text-lg text-gray-600">Explore similar items in the same category</p>
      </div>

      {/* Container for the related products */}
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {related.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 h-[280px] flex flex-col justify-between"
            >
              {/* Product Image */}
              <div className="w-full mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>

              {/* Product Details */}
              <div className="text-center">
                <h2 className="text-md font-semibold text-gray-800 mb-1 truncate">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-600 mb-1">{item.price}</p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>

              {/* Add to Cart Button */}
              <button className="bg-black text-white text-sm px-4 py-1 rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
