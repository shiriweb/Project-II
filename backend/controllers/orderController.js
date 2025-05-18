import orderModel from "../models/orderModel.js";
// Placing orders using COD Method

const placeOrder = async (req, res) => {};
try {
  const { userId, items, amount, address } = req.body;
  const orderData = {
    userId,
    items,
    amount,
    paymentMethod: "COD",
    payment: false,
    date: Date.now(),
  };
} catch (error) {}
// Placing orders Esewa  Method

const placeOrderEsewa = async (req, res) => {};

// Placing orders using Khalti Method

const placeOrderKhalti = async (req, res) => {};

// All Orders data for Admin Panel

const allOrders = async (req, res) => {};

// All Orders data for Frontend

const userOrders = async (req, res) => {};
// Update order status from Admin Panel
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderEsewa,
  placeOrderKhalti,
  allOrders,
  userOrders,
  updateStatus,
};
