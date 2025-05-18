import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal + delivery_fee;

  return (
    <div className="p-4 rounded-lg shadow-sm max-w-sm mx-auto mt-4 border border-gray-300">
      <div className="mb-2">
        <h1 className="text-lg font-semibold text-gray-800">Cart Totals</h1>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-gray-800 font-semibold">
            {currency}{subtotal || 0}.00
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="text-gray-800 font-semibold">
            {currency}{delivery_fee}.00
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="flex justify-between items-center text-sm">
          <b className="text-gray-800">Total</b>
          <b className="text-green-600 text-base">
            {currency}{total || 0}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
