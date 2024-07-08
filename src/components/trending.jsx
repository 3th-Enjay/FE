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
    { title: 'Shoes', imageUrl: shoes, description: '219' },
    { title: 'Accessories', imageUrl: accessories, description: '185 Products' },
  ];

  return (
    <div className="relative container mx-auto px-4">
      <h1 className="p-5 flex text-4xl font-bold text-center my-8">Trending Categories</h1>
      <div className=" mx-auto p-1 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-5 h-[250px] ">
        {services.map((service, index) => (
          <div key={index} className={`relative`} style={{height: '250px'}}>
            <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-50">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="mt-2 text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
