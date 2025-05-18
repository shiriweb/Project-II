import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductItems from "../Components/ProductItems";

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    let filtered = products;

    // Filter products based on the category
    if (category !== "") {
      filtered = filtered.filter(
        (item) => item.category?.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter products based on the search term
    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) // Case-insensitive search
      );
    }

    setFilteredProducts(filtered); // Set filtered products
  }, [category, products, search]); // Re-run the effect when category or search changes

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar for Categories */}
        <div className="md:w-1/4 p-4 bg-gray-100 rounded-lg shadow-md mb-6 md:mb-0 h-full">
          <p className="text-lg font-semibold mb-4 text-green-800">Categories</p>
          <div className="flex flex-col gap-4">
            <label>
              <input
                type="radio"
                value=""
                checked={category === ""}
                onChange={toggleCategory}
                className="mr-2"
              />
              All
            </label>
            <label>
              <input
                type="radio"
                value="keychain"
                checked={category === "keychain"}
                onChange={toggleCategory}
                className="mr-2"
              />
              Keychain
            </label>
            <label>
              <input
                type="radio"
                value="toys"
                checked={category === "toys"}
                onChange={toggleCategory}
                className="mr-2"
              />
              Toys
            </label>
            <label>
              <input
                type="radio"
                value="muffler"
                checked={category === "muffler"}
                onChange={toggleCategory}
                className="mr-2"
              />
              Muffler
            </label>
            <label>
              <input
                type="radio"
                value="cardigan"
                checked={category === "cardigan"}
                onChange={toggleCategory}
                className="mr-2"
              />
              Cardigan
            </label>
            <label>
              <input
                type="radio"
                value="beanie"
                checked={category === "beanie"}
                onChange={toggleCategory}
                className="mr-2"
              />
              Beanie
            </label>
          </div>
        </div>

        {/* Product List */}
        <div className="md:w-3/4 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-green-800">All Collections</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-auto">
            {filteredProducts.map((item, index) => (
              <ProductItems
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                currency={item.currency}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
