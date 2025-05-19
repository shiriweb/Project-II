import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import CartTotal from "../Components/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          tempData.push({
            _id: itemId,
            quantity: cartItems[itemId],
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  if (cartData.length === 0) {
    return (
      <div className="container p-4 mx-auto bg-white">
        <h1 className="text-lg font-semibold text-gray-800 mb-4">Your Cart</h1>
        <p className="text-gray-500 text-sm">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container p-2 mx-auto bg-white rounded-lg shadow-sm">
      <h1 className="text-lg font-semibold text-gray-800 mb-2">Your Cart</h1>
      <div className="space-y-2">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => String(product._id) === String(item._id) // changed here
          );

          if (!productData) {
            return (
              <div key={index} className="text-red-500 text-xs">
                Product not found
              </div>
            );
          }

          return (
            <div
              key={index}
              className="flex bg-[#f5f5f5] p-2 rounded-md items-center justify-between space-x-2"
            >
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={productData.image}
                  alt={productData.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex-1 ml-2">
                <p className="text-sm font-medium text-gray-800">
                  {productData.name}
                </p>
                <p className="text-xs text-green-600 font-semibold">
                  {currency}
                  {productData.price}
                </p>
              </div>

              <div className="flex items-center space-x-1">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={
                    (e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(item._id, Number(e.target.value)) // changed here
                  }
                  className="w-10 h-6 text-center border border-gray-300 rounded text-xs"
                />
              </div>

              <button
                onClick={() => updateQuantity(item._id, 0)} // changed here
                className="text-red-500 hover:text-red-700 text-sm"
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end mt-4">
        <div className="w-full sm:w-[350px]">
          <CartTotal />
          <div className="mt-2">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-green-600 text-white py-1 px-3 w-full rounded-md hover:bg-green-700 text-sm"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
