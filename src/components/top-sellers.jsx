import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './hooks/context.jsx';
import mloyepurse from '../assets/topsellers/mlouypurse.png';
import leatherjacket from '../assets/topsellers/leather-jacket.png';
import cuffedbean from '../assets/topsellers/cuffed-bean.png';
import parkermens from '../assets/topsellers/parker-mans.png';
import ventulo from '../assets/topsellers/ventalo.png';
import casualprinted from '../assets/topsellers/casual-printed.png';
import solyhux from '../assets/topsellers/mens-plaid.png';
import pokemonbag from '../assets/topsellers/pokemonbag.png';

const TopSellers = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const productCards = [
    {
      name: "Mloye Purse",
      price: "NGN 15,000",
      colors: ["black", "orange", "brown"],
      imageUrl: mloyepurse,
    },
    {
      name: "Leather Jacket",
      price: "NGN 42,500",
      colors: ["red", "green", "blue"],
      imageUrl: leatherjacket,
    },
    {
      name: "Cuffed Bean Hat",
      price: "NGN 7,500",
      colors: ["black", "red", "lightgrey"],
      imageUrl: cuffedbean,
    },
    {
      name: "Parker Man's Jacket",
      price: "NGN 15,000",
      colors: ["red", "yellow", "green"],
      imageUrl: parkermens,
    },
    {
      name: "Ventula Buttoned Shirt",
      price: "NGN 15,000",
      colors: ["grey", "#33FF57", "blue"],
      imageUrl: ventulo,
    },
    {
      name: "Casual Printed Men's Shirt",
      price: "NGN 15,000",
      colors: ["orange", "red", "skyblue"],
      imageUrl: casualprinted,
    },
    {
      name: "Solyhux Men's Plain Shirt",
      price: "NGN 15,000",
      colors: ["orange", "brown", "pink"],
      imageUrl: solyhux,
    },
    {
      name: "Stickered Pokemon Bag",
      price: "NGN 15,000",
      colors: ["black", "yellow", "green"],
      imageUrl: pokemonbag,
    },
  ];

  const handleProductClick = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="relative container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {productCards.map((product, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden m-2 relative" style={{ height: '500px' }} onClick={() => handleProductClick(product)}>
            <img src={product.imageUrl} alt={product.name} style={{ height: '250px' }} className="w-full h-full object-cover" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.price}</p>
            </div>
            <div className="flex space-between gap-2 px-6">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className={`inline-block align-middle select-none transition duration-150 ease-in-out rounded-full w-6 h-6 mb-1 cursor-pointer hover:border-black border-2`}
                  style={{ backgroundColor: color, borderColor: 'transparent' }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button onClick={() => navigate('/products')} className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800">Shop Now</button>
      </div>
    </div>
  );
};

export default TopSellers;
