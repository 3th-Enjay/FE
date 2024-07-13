import React, { useState } from 'react';
import { FaSearch, FaShoppingBag, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/TradeTrail.png';

const NavHeader = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    setShowInput(false);
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <header className="relative bg-white text-black flex justify-between items-center h-16 px-4 md:px-10 pt-2">
      <div className="flex items-center space-x-4 md:space-x-10">
        {/* Menu Icon for mobile view */}
        <FaBars 
          onClick={() => setShowMenu(!showMenu)} 
          className="h-6 w-6 text-gray-500 cursor-pointer md:hidden" 
        />
        {/* Logo */}
        <img src={logo} onClick={() => navigate('/')} alt="Logo" className="h-6 w-auto cursor-pointer" />
      </div>
      <div className="hidden md:flex justify-center space-x-4 md:space-x-8 flex-grow">
        {/* Navigation Links */}
        <Link to="/" className="hover:text-gray-700 text-green-500">Home</Link>
        <a href="#shop" className="hover:text-gray-700">Shop</a>
        <Link to="/products" className="hover:text-gray-700 text-green-500">Products</Link>
        <a href="#about" className="hover:text-gray-700">About</a>
        <a href="#blog" className="hover:text-gray-700">Blog</a>
      </div>
      <div className="flex items-center space-x-4 md:space-x-8">
        {/* Icons */}
        <FaSearch onClick={() => setShowInput(true)} className="h-6 w-6 text-gray-500 cursor-pointer" />
        <FaShoppingBag 
          onClick={() => navigate('/cart')} 
          className="h-6 w-6 text-gray-500 cursor-pointer" 
        />
        <FaUser className="h-6 w-6 text-gray-500 cursor-pointer" />
      </div>
      {showInput && (
        <div className="absolute top-16 right-4 bg-white shadow-md p-4 rounded flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter item"
            className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 mr-2"
          />
          <FaTimes 
            onClick={() => setShowInput(false)} 
            className="h-6 w-6 text-gray-500 cursor-pointer mr-2" 
          />
          <button 
            onClick={handleSearch} 
            className="bg-gray-900 text-white px-3 py-1 rounded hover:bg-gray-800"
          >
            Search
          </button>
        </div>
      )}
      {showMenu && (
        <div className="absolute top-16 left-0 bg-white shadow-md p-4 rounded w-48 md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-gray-700 text-green-500" onClick={() => setShowMenu(false)}>Home</Link>
            <a href="#shop" className="hover:text-gray-700" onClick={() => setShowMenu(false)}>Shop</a>
            <Link to="/products" className="hover:text-gray-700 text-green-500" onClick={() => setShowMenu(false)}>Products</Link>
            <a href="#about" className="hover:text-gray-700" onClick={() => setShowMenu(false)}>About</a>
            <a href="#blog" className="hover:text-gray-700" onClick={() => setShowMenu(false)}>Blog</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavHeader;
