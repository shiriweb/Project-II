import React from 'react';
import image from "../Assets/images/image.jpg"; 
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="relative max-w-screen-xl h-[500px] overflow-hidden mt-[-5px] mx-4 rounded-md shadow bg-[#f5f5f5]">
      
      {/* Background Image */}
      <img
        className="h-full w-full object-cover"
        src={image}
        alt="Home"
      />
      
      {/* Overlay content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center space-y-5 px-4">
        
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-medium tracking-wide leading-snug">
          Enjoy the Refined Softness <br className="hidden md:block"/> of Our Yarn Products
        </h1>

        {/* CTA Button */}
        <Link to="/products">
          <button className="bg-transparent border-2 border-white text-white font-medium text-sm md:text-base rounded-md px-6 py-2 hover:bg-white hover:text-black transition-all duration-300">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
