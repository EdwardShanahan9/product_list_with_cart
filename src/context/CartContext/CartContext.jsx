import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderConfirm, setOrderConfirm] = useState(false);

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

  const displayOrderConfirm = () => setOrderConfirm(true);

  const restartOrder = () => {
    setCartItems([]);

    setOrderConfirm(false);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeCartItem,
        orderConfirm,
        displayOrderConfirm,
        restartOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
