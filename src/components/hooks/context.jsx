import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setTotal((prevTotal) => prevTotal + parseFloat(product.price.replace('NGN ', '').replace(',', '')));
  };

  return (
    <CartContext.Provider value={{ cartItems, total, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
