import React, { useState } from 'react';
import { Avatar } from '@material-tailwind/react'; // Assuming Rating is not being used correctly
import customer1 from '../assets/rating/customer.png';
import customer2 from '../assets/rating/customer2.png';

const CustomersReview = () => {
  const [rating, setRating] = useState(0); // Initialize rating state

  const handleClick = (value) => {
    setRating(value); // Update rating state on click
  };

  return (
    <section className="py-12 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Customers Review
          </h4>
          <h2 className="mt-2 text-xl leading-7 text-gray-600 sm:mt-4">
            Don't just take our words for it
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10">
          {/* First Customer Review Card */}
          <div className="flex flex-col h-full"> 
  <div className="flex flex-row w-full h-full"> 
    <div className="relative w-1/2 h-full overflow-hidden"> 
      <img src={customer1} alt="Product Image" className="absolute inset-0 w-full h-full object-contain" /> 
    </div>
    <div className="flex flex-col justify-between w-1/2 h-full p-4"> 
    <div className="flex space-x-2"> 
        {[...Array(5)].map((_, i) => (
          <button key={i} className="cursor-pointer text-green-400">
            ★
          </button>
        ))}
      </div>
     
      <p className="text-sm text-gray-600">"I absolutely love the variety of styles available on this site! The quality of the clothes I purchased exceeded my expectations, and the customer service was outstanding."</p> 
      <h3 className="text-lg font-semibold">Jenny Wilson</h3> 
    </div>
  </div>
</div>


          {/* Second Customer Review Card */}
          <div className="flex flex-col h-full"> 
  <div className="flex flex-row w-full h-full"> 
    <div className="relative w-1/2 h-full overflow-hidden"> 
      <img src={customer2} alt="Product Image" className="absolute inset-0 w-full h-full object-contain" /> 
    </div>
    <div className="flex flex-col justify-between w-1/2 h-full p-4"> 
    <div className="flex space-x-2"> 
        {[...Array(5)].map((_, i) => (
          <button key={i} className="cursor-pointer text-green-400">
            ★
          </button>
        ))}
      </div>
      
      <p className="text-sm text-gray-600">"I absolutely love the variety of styles available on this site! The quality of the clothes I purchased exceeded my expectations, and the customer service was outstanding."</p> 
      <h3 className="text-lg font-semibold">Mathew Chima</h3> 
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default CustomersReview;
