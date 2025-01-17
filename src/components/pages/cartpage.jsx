import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/context.jsx';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, total, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="w-full bg-white text-left">
              <th className="py-2 px-4 border">Select</th>
              <th className="py-2 px-4 border">Items</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Size</th>
              <th className="py-2 px-4 border">Color</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Actions</th>
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
                  <input type="number" value={item.quantity || 1} className="w-16 text-center border rounded" />
                </td>
                <td className="py-2 px-4 border text-center">{item.size || 'N/A'}</td>
                <td className="py-2 px-4 border text-center">{item.color || 'N/A'}</td>
                <td className="py-2 px-4 border text-center">{item.price}</td>
                <td className="py-2 px-4 border text-center">
                  <button onClick={() => removeFromCart(index)} className="text-red-600 hover:text-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-8">
        <h2 className="text-2xl font-bold">Total: NGN {total.toLocaleString()}</h2>
        <button onClick={() => navigate('/checkout')} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
