import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">My Orders</h1>
      </div>
      <div className="space-y-4">
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className="flex items-center p-4 border rounded-md shadow-sm bg-white">
            {/* Product Image */}
            <div className="flex justify-center items-center mr-4">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
            </div>

            {/* Product Name */}
            <div className="flex-1 text-sm text-gray-800">
              <p className="truncate">{item.name}</p>
            </div>

            {/* Price */}
            <div className="text-sm text-gray-600 mr-4">
              <p>{currency}{item.price}</p>
            </div>

            {/* Quantity */}
            <div className="text-sm text-gray-600 mr-4">
              <p>Quantity: 1</p>
            </div>

            {/* Date */}
            <div className="text-sm text-gray-500 mr-4">
              <p>25, Jul, 2025</p>
            </div>

            {/* Order Status & Track Button */}
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              <p className="text-xs text-gray-600">Ready to Ship</p>
              <button className="bg-black text-white py-1 px-3 text-xs rounded-md hover:bg-gray-800">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
