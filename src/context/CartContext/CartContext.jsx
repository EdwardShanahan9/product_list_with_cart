import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.name !== product.name
      );
      if (quantity > 0) {
        updatedItems.push({ ...product, quantity });
      }
      return updatedItems;
    });
  };

  const removeCartItem = (name) => {
    setCartItems((prevItem) => prevItem.filter((item) => item.name !== name));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
