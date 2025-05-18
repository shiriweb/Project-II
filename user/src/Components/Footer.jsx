import React from 'react';
import footer_logo from '../Assets/images/logos.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 border-t">
      <div className="w-full px-4 flex flex-col md:flex-row justify-between items-start gap-6">
        
        {/* Logo and Description */}
        <div>
          <img src={footer_logo} alt="Logo" className="w-24 h-auto mb-2" />
          <p className="text-sm text-green-800 max-w-xs">
            Handmade with love and care, our products bring warmth and charm to your everyday life.
          </p>
        </div>

        {/* Vertical Navigation Links */}
        <ul className="flex flex-col gap-2 text-green-700 text-sm font-medium">
          <li className="hover:text-green-600 cursor-pointer">Company</li>
          <li className="hover:text-green-600 cursor-pointer">Products</li>
          <li className="hover:text-green-600 cursor-pointer">About</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        {/* Contact Info */}
        <div className="text-sm text-green-800">
          <p><strong>Phone:</strong> +977-9800000000</p>
          <p><strong>Email:</strong> info@yarncreation.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-3 pt-2 text-xs text-green-700 border-t border-green-300">
        <p>&copy; 2025 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
