import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="bg-white text-black flex justify-between items-center h-16 px-4 md:px-10 shadow-md"
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
      <div className="hidden md:flex space-x-4 md:space-x-8">
        <div className="relative">
          <select className="w-full bg-transparent border-none outline-none p-2 rounded-md text-black hover:bg-white focus:ring-0">
            
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="german">German</option>
          </select>
        </div>
        <div className="relative">
          <select className="w-full bg-transparent border-none outline-none p-2 rounded-md text-black hover:bg-white focus:ring-0">
            
            <option value="ngn">NGN</option>
            <option value="gbp">GBP</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>
      <div className="md:hidden">
        <FaBars className="h-6 w-6 cursor-pointer" onClick={toggleMenu} />
      </div>
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4 z-50">
          <div className="relative mb-2">
            <select className="w-full bg-transparent border-none outline-none p-2 rounded-md text-black hover:bg-white focus:ring-0">
              <option value="">English</option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
          <div className="relative">
            <select className="w-full bg-transparent border-none outline-none p-2 rounded-md text-black hover:bg-white focus:ring-0">
              <option value="">NGN</option>
              <option value="ngn">NGN</option>
              <option value="gbp">GBP</option>
              <option value="eur">EUR</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
