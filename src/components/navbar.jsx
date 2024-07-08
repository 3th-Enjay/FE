// src/NavBar.js
import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-white text-black flex justify-between items-center h-16 px-4 md:px-10 shadow-md"
     style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
    >

      <div className="flex items-center space-x-4 md:space-x-10">
        
        <div className="flex items-center space-x-2">
          <FaFacebookF className="h-6 w-6 text-blue-500" />
          <span>5k followers</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaInstagram className="h-6 w-6 text-pink-600" />
          <span>4k followers</span>
        </div>
      </div>
      <div className="flex space-x-4 md:space-x-8">
        <div className="relative">
          <select className="w-full bg-transparent border-none outline-none p-2 rounded-md text-black hover:bg-white focus:ring-0">
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
        </div>
        <div className="relative">
          <select className="w-full bg-transparent border-none outline-none p-2 rounded-md text-black hover:bg-white focus:ring-0">
            <option value="">Select Currency</option>
            <option value="ngn">NGN</option>
            <option value="gbp">GBP</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
