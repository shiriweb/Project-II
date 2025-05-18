import userModel from "../models/userModel.js";

// Add Products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const userData = await userModel.findById(userId);

    // Ensure cartData exists and is an object
    let cartData = userData.cartData || {};

    if (cartData[itemId]) {
      // If item already in cart, increment quantity
      cartData[itemId] += 1;
    } else {
      // If item not in cart, set quantity to 1
      cartData[itemId] = 1;
    }

    // Update user cart data in DB
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({
      success: true,
      message: "Added to Cart",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Update Products to user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, quantity } = res.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = res.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addToCart, updateCart, getUserCart };
