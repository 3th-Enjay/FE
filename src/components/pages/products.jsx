import React from 'react';
import mloyepurse from './imgs/topsellers/mlouypurse.png'
import leatherjacket from './imgs/topsellers/leather-jacket.png';
import cuffedbean from './imgs/topsellers/cuffed-bean.png';
import parkermens from './imgs/topsellers/parker-mans.png';
import ventulo from './imgs/topsellers/ventalo.png';
import casualprinted from './imgs/topsellers/casual-printed.png';
import solyhux from './imgs/topsellers/mens-plaid.png';
import pokemonbag from './imgs/topsellers/pokemonbag.png';


const Products = () => {
  const productCards = [
    {
      item: "Mloye Purse",
      amount: "NGN 15,000",
      color1: "black",
      color2: "orange",
      color3: "brown",
      imageUrl: mloyepurse,
    },
    {
      item: "Leather Jacket",
      amount: "NGN 42,500",
      color1: "red",
      color2: "green",
      color3: "blue",
      imageUrl: leatherjacket,
    },
    {
      item: "Cuffed Bean Hat",
      amount: "NGN 7,500",
      color1: "black",
      color2: "red",
      color3: "lightgrey",
      imageUrl: cuffedbean,
    },
    {
      item: "Parker Man's Jacket",
      amount: "NGN 15,000",
      color1: "red",
      color2: "yellow",
      color3: "green",
    imageUrl: parkermens,
    },
    {
      item: "ventula Buttoned Shirt",
      amount: "NGN 15,000",
      color1: "grey",
      color2: "#33FF57",
      color3: "blue",
      imageUrl: ventulo,
    },
    {
      item: "Casual Printed Men's Shirt",
      amount: "NGN 15,000",
      color1: "orange",
      color2: "red",
      color3: "skyblue",
      imageUrl: casualprinted,
    },  {
      item: "Solyhux Men's Plain Shirt",
      amount: "NGN 15,000",
      color1: "orange",
      color2: "brown",
      color3: "pink",
      imageUrl: solyhux,
    },  {
      item: "Stickered Pokemon Bag",
      amount: "NGN 15,000",
      color1: "black",
      color2: "yellow",
      color3: "green",
      imageUrl: pokemonbag,
    },  
  
  ];

  return (
    

    <div className=" container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Products</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {productCards.map((product, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden m-2 " style={{ height: '500px' }}>
            <img src={product.imageUrl} alt={product.item} style={{height: '250px'}} className="w-full h-full object-cover" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.item}</div>
              <p className="text-gray-700 text-base">{product.amount}</p>
            </div>
            <div className=" flex space-between gap-2 px-6 ">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className={`inline-block  align-middle select-none transition duration-150 ease-in-out rounded-full w-6 h-6 mb-1 cursor-pointer hover:border-black border-2`}
                  style={{ backgroundColor: product[`color${i + 1 }`], borderColor: 'transparent' }} // Set initial border color to transparent
                  onClick={() => console.log(`Circle ${i + 1} clicked.`)}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800">Check Out</button>
      </div>
    </div>
  );
};


export default Products;