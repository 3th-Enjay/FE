import React from 'react';
import image from '../assets/greenshirt.png';

const HeroSection = () => {
  return (
    <section className="w-full  bg-gray-200 opacity flex justify-evenly items-center">
      <div className="m-5 flex flex-col ">
        <h3 className="text-lg font-serif mb-5">New Arrivals</h3>
        <p className="text-3xl font-bold font-serif mb-5">Classic Green T-Shirts</p>
        <button className="w-1/2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Shop Now</button>
      </div>
      <div className="flex justify-evenly items-end  h-full ">
        <img src={image} alt="Product Image" className="relative  object-contain" />
        <p className="text-start mb-10 ">Shirt Collection | Shop Now</p>
      </div>
    </section>
  );
};

export default HeroSection;
