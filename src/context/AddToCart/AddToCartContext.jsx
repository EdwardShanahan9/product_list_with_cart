import { createContext, useState } from "react";

export const AddToCartContext = createContext();

export const AddToCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(null);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [product.name]: { ...product, quantity },
    }));
  };

  console.log(cartItems);

  return (
    <AddToCartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </AddToCartContext.Provider>
  );
};
