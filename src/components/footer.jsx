import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../assets/TradeTrail.png'

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    information: false,
    quickLinks: false,
    faq: false,
    ourStore: false,
  });

  const toggleDropdown = (key) => {
    setIsOpen(prevState => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <footer className=" text-gray-500 p-10">
      <div className="container mx-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">Information</h3>
            <ul>
              <li><a href="#" onClick={() => toggleDropdown('information')}>Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
            {isOpen.information && (
              <ul className="hidden md:flex flex-col">
                <li><a href="#">Sub Link 1</a></li>
                <li><a href="#">Sub Link 2</a></li>
              </ul>
            )}
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" onClick={() => toggleDropdown('quickLinks')}>Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
            {isOpen.quickLinks && (
              <ul className="hidden md:flex flex-col">
                <li><a href="#">Sub Link 1</a></li>
                <li><a href="#">Sub Link 2</a></li>
              </ul>
            )}
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">FAQ</h3>
            <ul>
              <li><a href="#" onClick={() => toggleDropdown('faq')}>Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
            {isOpen.faq && (
              <ul className="hidden md:flex flex-col">
                <li><a href="#">Sub Link 1</a></li>
                <li><a href="#">Sub Link 2</a></li>
              </ul>
            )}
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">Our Store</h3>
            <ul>
              <li><a href="#" onClick={() => toggleDropdown('ourStore')}>Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
            </ul>
            {isOpen.ourStore && (
              <ul className="hidden md:flex flex-col">
                <li><a href="#">Sub Link 1</a></li>
                <li><a href="#">Sub Link 2</a></li>
              </ul>
            )}
          </div>
        </div>
        <div className='flex flex-col gap-5 my-20 mx-5 '>
        <div className="flex justify-center items-center mt-4">
          <img src={logo} alt="Company Logo" className="mx-auto" /> 
          </div>
          <div className="flex justify-center my-2 gap-5 items-center ">
            <div className='flex'> 
          <FaInstagram className=" mr-3 h-6 w-6 text-pink-600" />
            <span>5k followers</span>
            </div> 
            <div className='flex'>
            <FaFacebookF className="h-6 w-6 text-blue-500" />
            <span>5k followers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
