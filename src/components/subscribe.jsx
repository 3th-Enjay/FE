import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importing the envelope icon

const SubscribeComponent = () => {
  return (
    <div className="bg-green-800  flex flex-col items-center justify-center text-white">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Heading and Subheading for Email Input */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Subscribe</h2>
          <h3 className="font-medium mb-4">Enter Email to be the first to know about our Product Launches</h3>
        </div>

        {/* Email Input with Button */}
        <div className="flex items-center border-b border-gray-300 pb-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-0 focus:ring-0 outline-none pr-10"
          />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComponent;
