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

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const [removedItem] = updatedItems.splice(index, 1);
      setTotal((prevTotal) => prevTotal - parseFloat(removedItem.price.replace('NGN ', '').replace(',', '')));
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
