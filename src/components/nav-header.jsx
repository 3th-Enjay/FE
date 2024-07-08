// NavHeader.js
import React from 'react';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import logo from '../assets/TradeTrail.png';

const NavHeader = () => {
  return (
    <header className="relative bg-white text-black flex justify-between items-center h-16 px-4 md:px-10 pt-2 ">
      <div className="flex items-center space-x-4 md:space-x-10">
        {/* Logo Placeholder */}
        <img src={logo} alt="Logo" className="h-6 w-auto" />
      </div>
      <div className="hidden md:flex space-x-4 md:space-x-8">
        {/* Navigation Links */}
        <a href="#home" className="hover:text-gray-700">Home</a>
        <a href="#shop" className="hover:text-gray-700">Shop</a>
        <a href="#products" className="hover:text-gray-700">Products</a>
        <a href="#about" className="hover:text-gray-700">About</a>
        <a href="#blog" className="hover:text-gray-700">Blog</a>
      </div>
      <div className="flex items-center space-x-4 md:space-x-8">
        {/* Icons */}
        <FaSearch className="h-6 w-6 text-gray-500 cursor-pointer" />
        <FaShoppingBag className="h-6 w-6 text-gray-500 cursor-pointer" />
        <FaUser className="h-6 w-6 text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default NavHeader;
