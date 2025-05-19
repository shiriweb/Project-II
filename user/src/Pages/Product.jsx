import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
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
    <div className="flex items-center justify-center p-2 mt-[-5px]">
      <div className="max-w-3xl w-full flex">
        <div className="w-1/3 p-3">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-full h-auto object-cover rounded-lg max-h-60"
          />
        </div>
        <div className="w-2/3 p-6 space-y-3">
          <h1 className="text-lg font-bold text-gray-800">
            {productData.name}
          </h1>
          <p className="text-base text-gray-600">{productData.description}</p>
          <div className="text-base font-semibold text-green-600">
            Rs {productData.price}
          </div>
          <div className="text-base font-semibold text-green-600">
            Category: {productData.category}
          </div>
          <button onClick={()=>addToCart(productData._id)} className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg text-base transition duration-300">
            Add to Cart
          </button>
          <div className="text-xs text-gray-400">
            We offer 24/7 Customer Support, Secure Payment, and Quality
            Guaranteed.
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
