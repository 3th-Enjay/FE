import React from 'react';
import male from '../assets/male.png';
import female from '../assets/female.png';
import bag from '../assets/bags.png';
import shoes from '../assets/shoes.png';
import accessories from '../assets/accessories.png';

const Trending = () => {
  const services = [
    { title: 'Male Clothing', imageUrl: male, description: '332 Products' },
    { title: 'Female Clothing', imageUrl: female, description: '330 Products' },
    { title: 'Bags', imageUrl: bag, description: '250 Products' },
    { title: 'Shoes', imageUrl: shoes, description: '219 Products' },
    { title: 'Accessories', imageUrl: accessories, description: '185 Products' },
  ];

  return (
    <div className="container mx-auto px-4 mb-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">Trending Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {services.map((service, index) => (
          <div key={index} className="relative h-64 md:h-80 lg:h-96">
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">{service.title}</h2>
              <p className="text-sm md:text-base lg:text-lg mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
