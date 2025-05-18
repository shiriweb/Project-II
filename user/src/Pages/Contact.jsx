import React from 'react';
import Image from '../Assets/images/contact.jpg';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="p-6 bg-green-50">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-700">Contact Us</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            className="w-[350px] h-[370px] rounded-lg shadow-lg object-cover"
            src={Image}
            alt="Contact"
          />
        </div>

        {/* Info Section */}
        <div className="text-sm text-gray-700 max-w-md flex flex-col gap-2">
          <h3 className="font-semibold text-xl text-green-800">Our Store</h3>
          <p className="text-gray-600">Address: Tankeshwor, Kalimati</p>
          <p className="text-gray-600">Tel No: 015377925, 9860931929</p>
          <p className="text-gray-600 mb-3">Email: yarncreation@gmail.com</p>
          
          <p className="text-lg font-semibold text-black">
            Yarn Magic in Every Creation
          </p>
          <p className="text-gray-600 mt-3">Learn More About Our Store</p>

          <Link to="/aboutus">
            <button className="mt-2 w-28 py-2 bg-green-700 text-white font-semibold text-sm rounded-md hover:bg-green-800 transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
