// src/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const cartItems = [
    {
      name: 'Product 1',
      price: 'NGN 15,000',
      imageUrl: 'path/to/image1.png',
    },
    {
      name: 'Product 2',
      price: 'NGN 25,000',
      imageUrl: 'path/to/image2.png',
    },
    {
      name: 'Product 3',
      price: 'NGN 35,000',
      imageUrl: 'path/to/image3.png',
    },
    {
      name: 'Product 4',
      price: 'NGN 45,000',
      imageUrl: 'path/to/image4.png',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="w-full bg-gray-100 text-left">
              <th className="py-2 px-4 border">Select</th>
              <th className="py-2 px-4 border">Items</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Size</th>
              <th className="py-2 px-4 border">Color</th>
              <th className="py-2 px-4 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="text-left border-t">
                <td className="py-2 px-4 border text-center">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="py-2 px-4 border">
                  <img src={item.imageUrl} alt={item.name} className="inline-block w-16 h-16 mr-2" />
                  {item.name}
                </td>
                <td className="py-2 px-4 border text-center">
                  <input type="number" value={item.quantity} className="w-16 text-center border rounded" />
                </td>
                <td className="py-2 px-4 border text-center">{item.size}</td>
                <td className="py-2 px-4 border text-center">{item.color}</td>
                <td className="py-2 px-4 border text-center">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-8">
        <button onClick = {()=> navigate('/checkout')}className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
