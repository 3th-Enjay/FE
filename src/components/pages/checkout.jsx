import React from 'react';
import { useCart } from '../hooks/context.jsx';

const Checkout = () => {
  const { cartItems, total } = useCart();

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment logic here
    alert('Payment Successful!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="w-full bg-white text-left">
                  <th className="py-2 px-4 border">Items</th>
                  <th className="py-2 px-4 border">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index} className="text-left border-t">
                    <td className="py-2 px-4 border">
                      <img src={item.imageUrl} alt={item.name} className="inline-block w-16 h-16 mr-2" />
                      {item.name}
                    </td>
                    <td className="py-2 px-4 border text-center">{item.price}</td>
                  </tr>
                ))}
                <tr className="text-left border-t">
                  <td className="py-2 px-4 border font-bold">Total</td>
                  <td className="py-2 px-4 border text-center font-bold">NGN {total.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
          <form onSubmit={handlePayment}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="card">Card Details</label>
              <input type="text" id="card" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Card Number" required />
            </div>
            <div className="flex justify-between items-center mb-4">
              <img src="path/to/mastercard-logo.png" alt="MasterCard" className="h-10" />
              <img src="path/to/visa-logo.png" alt="Visa" className="h-10" />
              <img src="path/to/other-payment-logo.png" alt="Other Payment" className="h-10" />
            </div>
            <button type="submit" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
