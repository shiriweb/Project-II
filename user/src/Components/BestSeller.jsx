import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductItems from './ProductItems';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item) => item.bestseller);
    setBestSeller(filtered.slice(0, 5));
  }, [products]);

  return (
    <div className="py-8 bg-green-50">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-green-800">🌟 Best Sellers</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 sm:px-8">
        {bestseller.map((item, index) => (
          <ProductItems
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
