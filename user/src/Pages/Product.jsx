import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);

const fetchProductData = () => {
  console.log("Looking for productId:", productId);
  console.log("Products array:", products);

  const product = products.find((item) => item._id === productId);
  if (product) {
    setProductData(product);
    console.log("Found product:", product);
  } else {
    console.log("Product not found");
  }
};


  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative pb-2/3">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{productData.name}</h1>
          <p className="text-gray-600">{productData.description}</p>
          <div className="text-xl font-semibold text-green-600">Rs {productData.price}</div>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
