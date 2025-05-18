import React, { useContext, useState } from "react";
import CartTotal from "../Components/CartTotal";
import esewa from "../Assets/image/esewa.png";
import khalti from "../Assets/image/khalti.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ShopContext } from "../Context/ShopContext";
import axios from "axios";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {backendUrl, token , cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    address: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
  event.preventDefault();
  try {
    let orderItems = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === items)
          );
          if (itemInfo) {
            itemInfo.quantity = cartItems[items][item];
            orderItems.push(itemInfo);
          }
        }
      }
    }
let orderData ={
  address:formData,
  items: orderItems,
  amount:getCartAmount()+ delivery_fee
}
switch(method){
  // API calls for COD
case'cod':
const response = await axios.post(backendUrl+'/api/order/place',orderData,{headers:{token}})
console.log(response.data);

if(response.data.success){
  setCartItems({})
  navigate('/ordera')
}else{
  alert(response.data.message)
}
break;
default:
  break;
}
  } catch (error) {
  }
};


  const navigate = useNavigate(); 

  return (
    <form className="flex flex-col md:flex-row p-6 gap-6" onSubmit={onSubmitHandler}>
      {/* Left Side - Delivery Information */}
      <div className="flex-1 md:w-[45%] p-4">
        <h1 className="text-lg font-semibold mb-4 text-gray-800">
          Delivery Information
        </h1>
        <div className="flex gap-4 mb-4">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="First Name"
            className="flex-1 p-2 border border-gray-300 rounded-md" required
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last Name"
            className="flex-1 p-2 border border-gray-300 rounded-md" required
          />
        </div>
        <input
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          placeholder="Email Address"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md" required
        />
        <div className="flex gap-4 mb-4">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            type="text"
            placeholder="City"
            className="flex-1 p-2 border border-gray-300 rounded-md" required
          />
          <input
            onChange={onChangeHandler}
            name="address"
            value={formData.address}
            type="text"
            placeholder="Address"
            className="flex-1 p-2 border border-gray-300 rounded-md" required
          />
        </div>
        <input
          type="number"
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          placeholder="Phone"
          className="w-full p-2 border border-gray-300 rounded-md" required
        />
      </div>

      {/* Right Side - Cart Total & Payment Method */}
      <div className="flex-1 md:w-[55%] space-y-6">
        {/* Cart Total */}
        <div className="p-4 rounded-lg shadow-sm">
          <CartTotal />
        </div>

        {/* Payment Method */}
        <div className="p-4 rounded-lg shadow-sm">
          <h1 className="text-lg font-semibold mb-4 text-gray-800">
            Payment Method
          </h1>
          <div className="flex flex-row gap-4">
            <div
              className={`flex items-center gap-2 p-2 border ${
                method === "esewa" ? "border-green-600" : "border-gray-300"
              } rounded-md cursor-pointer`}
              onClick={() => setMethod("esewa")}
            >
              <img src={esewa} alt="Esewa" className="w-8 h-8" />
              <p className="text-gray-800">Esewa</p>
            </div>

            <div
              className={`flex items-center gap-2 p-2 border ${
                method === "khalti" ? "border-green-600" : "border-gray-300"
              } rounded-md cursor-pointer`}
              onClick={() => setMethod("khalti")}
            >
              <img src={khalti} alt="Khalti" className="w-8 h-8" />
              <p className="text-gray-800">Khalti</p>
            </div>

            <div
              className={`flex items-center gap-2 p-2 border ${
                method === "cod" ? "border-green-600" : "border-gray-300"
              } rounded-md cursor-pointer`}
              onClick={() => setMethod("cod")}
            >
              <p className="text-gray-800">Cash On Delivery</p>
            </div>
          </div>
          <div className="text-right mt-4 mr-[55px]">
            <button
              type="submit"
              className="bg-black text-white px-10 py-3 text-sm"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
