import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// function for adding product

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, bestseller } = req.body;
    const image = req.file;

    const result = await cloudinary.uploader.upload(image.path, {
      resource_type: "image",
    });

    const imageUrl = result.secure_url; // Cloudinary URL of the uploaded image

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      bestseller: bestseller === "true" ? true : false,
      image: imageUrl,
      date: Date.now(),
    };

    console.log(productData);
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: error.message });
  }
};

// function for listing product

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for removing product

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product info

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
