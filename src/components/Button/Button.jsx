import { useContext, useState } from "react";
import IconCart from "../../assets/images/icon-add-to-cart.svg";
import IconAdd from "../../assets/images/icon-increment-quantity.svg";
import IconMinus from "../../assets/images/icon-decrement-quantity.svg";
import { CartContext } from "../../context/CartContext/CartContext";

const Button = ({ product, onActivate }) => {
  const [counter, setCounter] = useState(0);
  const { addToCart } = useContext(CartContext);

  const decrement = () => {
    if (counter > 0) {
      const newCount = counter - 1;
      setCounter(newCount);
      addToCart(product, newCount);
    }
  };

  const increment = () => {
    const newCount = counter + 1;
    setCounter(newCount);
    addToCart(product, newCount);
  };

  const addToCartButton = () => {
    setCounter(1);

    onActivate();

    addToCart(product, 1);
  };

  const addButton = (
    <>
      <button
        onClick={addToCartButton}
        className="bg-white py-3 px-7 border border-rose400 rounded-full flex items-center text-rose900 font-primaryBold text-sm"
      >
        <img className="mr-2" src={IconCart} alt="Cart Icon" />
        {"Add to Cart"}
      </button>
    </>
  );
  const quanitybutton = (
    <>
      <button className="bg-primary py-3 px-7 border border-primary rounded-full flex  items-center justify-between text-white font-primaryBold text-sm">
        <img
          onClick={decrement}
          className="mr-11"
          src={IconMinus}
          alt="Cart Icon"
        />
        <span className="mr-11">{counter}</span>
        <img onClick={increment} className="" src={IconAdd} alt="Cart Icon" />
      </button>
    </>
  );

  return (
    <div className="absolute bottom-2 translate-y-2/3 ">
      {counter > 0 ? quanitybutton : addButton}
    </div>
  );
};

export default Button;
