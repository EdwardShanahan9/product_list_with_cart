import { CartContext } from "../../../context/CartContext/CartContext";
import { useContext } from "react";
import CartItems from "../../../components/CartItems/CartItems";
import TreeIcon from "../../../assets/images/icon-carbon-neutral.svg";
import EmptyCarIcon from "../../../assets/images/illustration-empty-cart.svg";

const Cart = () => {
  const { cartItems, removeCartItem } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const CartElements = (
    <div>
      <ul>
        {cartItems.map((item, index) => (
          <CartItems
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            removeCartItem={() => removeCartItem(item.name)}
          />
        ))}
      </ul>

      <div className="flex items-center justify-between mb-6">
        <p className="font-sm text-rose900">Order Total</p>

        <h2 className="font-primaryBold text-rose900 text-2xl">
          ${totalPrice}
        </h2>
      </div>

      <div className="bg-rose50 rounded-lg py-4 px-5 flex items-center mb-6">
        <img className="mr-2" src={TreeIcon} alt="Tree Icon" />

        <p className="text-sm">
          This is a <span className="font-primaryMedium"> carbon-neutral</span>{" "}
          delivery
        </p>
      </div>

      <button className="bg-primary text-base font-primaryMedium text-white rounded-full py-4 w-full">
        Confirm Order
      </button>
    </div>
  );

  const cartImageElements = (
    <div className="flex items-center justify-center flex-col">
      <img className="mb-4" src={EmptyCarIcon} alt="Empty Cart Icon" />

      <h3 className="text-rose500 font-primaryMedium font-sm">
        Your added items will appear here
      </h3>
    </div>
  );

  return (
    <div className="bg-white rounded-xl p-6 h-max basis-[30%]">
      <h2 className="font-primaryBold text-primary text-2xl mb-6">
        Your Cart <span>({totalItems})</span>
      </h2>
      {cartItems.length > 0 ? CartElements : cartImageElements}
    </div>
  );
};

export default Cart;
