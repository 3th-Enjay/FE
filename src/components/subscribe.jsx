import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import subscribe from '../assets/subscribe/subscribe.png'

const SubscribeComponent = () => {
  return (
    <div className="relative bg-green-800 flex  items-center justify-center text-white">
      <div className="w-full max-w-md my-10 rounded-lg">
        {/* Heading and Subheading for Email Input */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Subscribe</h2>
          <h3 className="mb-4">Enter Email to be the first to know about our Product Launches</h3>
        </div>

        {/* Responsive Input Box and Button Layout */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 rounded-lg focus:ring-0 outline-none pl-10 pr-10"
            />
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-end mt-2 md:mt-0">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Image Half */}
      <div className="flex justify-center w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mt-10">
        <div className="relative w-full h-64 md:h-96 lg:h-128 xl:h-160">
          <img src={subscribe} alt="Your Image Description" className="rounded-lg  w-full h-full object-right" />
        </div>
      </div>
    </div>
  );
};

export default SubscribeComponent;
