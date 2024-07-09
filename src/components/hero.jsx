import React from 'react';
import image from '../assets/greenshirt.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-gray-200 flex flex-col md:flex-row justify-evenly items-center ">
      <div className="m-5 flex flex-col items-center md:items-start">
        <h3 className="text-sm md:text-lg font-serif mb-2 md:mb-5">New Arrivals</h3>
        <p className="text-xl md:text-3xl font-bold font-serif mb-2 md:mb-5 text-center md:text-left">Classic Green T-Shirts</p>
        <button onClick ={()=>navigate('/products')} className="w-full md:w-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center h-full">
        <img src={image} alt="Product Image" className="relative w-full md:w-auto object-contain mb-5 md:mb-0" />
        <p className="text-start mb-10 hidden md:block">Shirt Collection | Shop Now</p>
      </div>
    </section>
  );
};

export default HeroSection;
