import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { backendUrl } from "../App";

const AddProducts = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("keychain"); // Default category is "keychain"
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("bestseller", bestseller);
      formData.append("image", image);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        alert(response.data.message); // Success alert
        setName('');
        setDescription('');
        setImage(null); // Reset image after submission
        setPrice('');
        setCategory("keychain"); // Reset category to "keychain"
        setBestseller(false); // Reset bestseller to false
      } else {
        alert(response.data.message); // Error alert
      }
    } catch (error) {
      console.error(error);
      alert(error.message); // Error alert on failure
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fafafa]">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-[500px] space-y-6"
        onSubmit={onSubmitHandler}
      >
        {/* Upload Image */}
        <div>
          <p className="text-gray-800 mb-3 font-medium">Upload Image</p>
          <div className="flex items-center space-x-3">
            <label
              htmlFor="image"
              className="cursor-pointer text-green-500 hover:text-green-600 text-2xl"
            >
              <FontAwesomeIcon icon={faUpload} />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              required
              className="border border-gray-300 rounded-lg p-2 text-sm w-full bg-[#fafafa] focus:outline-none focus:border-green-500 focus:ring focus:ring-green-100"
            />
          </div>
        </div>

        {/* Product Name */}
        <div>
          <p className="text-gray-800 mb-3 font-medium">Product Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter Product Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring focus:ring-green-100"
          />
        </div>

        {/* Product Description */}
        <div>
          <p className="text-gray-800 mb-3 font-medium">Product Description</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="Type product description"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring focus:ring-green-100"
          ></textarea>
        </div>

        {/* Product Category */}
        <div>
          <p className="text-gray-800 mb-3 font-medium">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category} // Binding the selected category
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring focus:ring-green-100"
          >
            <option value="keychain">Keychain</option>
            <option value="toys">Toys</option>
            <option value="cardigan">Cardigan</option>
            <option value="muffler">Muffler</option>
            <option value="flower">Flower</option>
            <option value="bags">Bags</option>
          </select>
        </div>

        {/* Product Price */}
        <div>
          <p className="text-gray-800 mb-3 font-medium">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="100"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring focus:ring-green-100"
          />
        </div>

        {/* Bestseller Checkbox */}
        <div className="flex items-center space-x-3">
          <input
            onChange={() => setBestseller((prev) => !prev)}
            checked={bestseller}
            type="checkbox"
            id="bestseller"
            className="h-5 w-5 text-green-500"
          />
          <label htmlFor="bestseller" className="text-gray-800 font-medium">
            Add to Bestseller
          </label>
        </div>

        {/* Add Product Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-100"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
