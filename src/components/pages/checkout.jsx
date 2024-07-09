// src/Checkout.js
import React from 'react';

const Checkout = ({ cartItems, onClose }) => {
  const sampleCartItems = cartItems || [
    {
      name: 'Product 1',
      price: 'NGN 15,000',
      imageUrl: 'path/to/image1.png',
      quantity: 1,
      size: 'M',
      color: 'Black',
    },
    {
      name: 'Product 2',
      price: 'NGN 25,000',
      imageUrl: 'path/to/image2.png',
      quantity: 2,
      size: 'L',
      color: 'Red',
    },
    {
      name: 'Product 3',
      price: 'NGN 30,000',
      imageUrl: 'path/to/image3.png',
      quantity: 1,
      size: 'S',
      color: 'Blue',
    },
    {
      name: 'Product 4',
      price: 'NGN 10,000',
      imageUrl: 'path/to/image4.png',
      quantity: 3,
      size: 'XL',
      color: 'Green',
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row shadow-lg">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Your Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                className="w-full px-2 py-2 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none bg-transparent"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-2 py-2 border-b-2 border-gray-300 focus:border-gray-600 focus:outline-none bg-transparent"
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Your Items</h2>
          <div className="space-y-4">
            {sampleCartItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16" />
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-gray-700">Size: {item.size}</div>
                  <div className="text-gray-700">Color: {item.color}</div>
                  <div className="text-gray-700">Quantity: {item.quantity}</div>
                  <div className="font-bold">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Checkout;
