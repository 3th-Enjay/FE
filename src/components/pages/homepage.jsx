// src/App.js
import React  from 'react';

import Hero from '../hero';
import Trending from '../trending';
import TopSellers from '../top-sellers';
import CustomersReview from '../customers-review';



function HomePage() {
  
  return (
    
<div className="flex flex-col min-h-screen">
       
      
       <Hero />
       <Trending/>
       <TopSellers/>
       <CustomersReview/>
       
   </div>
    
    
  );
}

export default HomePage;
