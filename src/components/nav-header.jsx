import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/TradeTrail.png';

const NavHeader = () => {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="relative bg-white text-black flex justify-between items-center h-16 px-4 md:px-10 pt-2">
      <div className="flex items-center space-x-4 md:space-x-10">
        {/* Logo Placeholder */}
        <img src={logo} onClick={() => navigate('/')} alt="Logo" className="h-6 w-auto" />
      </div>
      <div className="hidden md:flex space-x-4 md:space-x-8">
        {/* Navigation Links */}
        <Link to="/" className="hover:text-gray-700 text-green-500">Home</Link>
        <a href="#shop" className="hover:text-gray-700">Shop</a>
        <Link to="/products" className="hover:text-gray-700 text-green-500">Products</Link>
        <a href="#about" className="hover:text-gray-700">About</a>
        <a href="#blog" className="hover:text-gray-700">Blog</a>
      </div>
      <div className="flex items-center space-x-4 md:space-x-8">
        {/* Icons */}
        <FaSearch onClick={()=> setShowInput(true )} className="h-6 w-6 text-gray-500 cursor-pointer" />
        <FaShoppingBag 
          onClick={() => {
            navigate('/cart');
           
          }} 
          className="h-6 w-6 text-gray-500 cursor-pointer" 
        />
        <FaUser className="h-6 w-6 text-gray-500 cursor-pointer" />
      </div>
      {showInput && (
        <div className="absolute top-16 right-4 bg-white shadow-md p-4 rounded">
          <input
            type="text"
            placeholder="Enter item"
            className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500"
          />
        </div>
      )}
    </header>
  );
};

export default NavHeader;
