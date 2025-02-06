import { useContext, useEffect } from "react";
import ConfirmIcon from "../../assets/images/icon-order-confirmed.svg";
import OderConfirmedItem from "../OrderConfirmedItem/OderConfirmedItem";
import { CartContext } from "../../context/CartContext/CartContext";

const OrderConfirmed = () => {
  const { cartItems } = useContext(CartContext);
  const { orderConfirmed } = useContext(CartContext);

  useEffect(() => {
    if (OrderConfirmed) {
      document.body.classList.add("overflow-hidden");
      return () => document.body.classList.remove("overflow-hidden");
    }
  }, []);

  const handleClose = () => {
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 ${
        !orderConfirmed ? "hidden" : ""
      }`}
    >
      <div className="bg-white w-full md:w-[688px] lg:w-[592px] p-10 px-6 rounded-lg shadow-lg">
        <img className="mb-6" src={ConfirmIcon} alt="Tick Icon" />

        <h1 className="text-4xl font-primaryBold mb-2">Order Confirmed</h1>

        <p className="text-rose500 text-base mb-8">
          We hope you enjoy your food!
        </p>

        <div className="p-6 bg-rose50 mb-8 rounded-lg">
          <ul className="mb-12">
            {cartItems.map((item, index) => (
              <OderConfirmedItem
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                key={index}
              />
            ))}
          </ul>

          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-rose900">Order Total</p>
            <h2 className="font-primaryBold text-rose900 text-2xl">$46.50</h2>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="bg-primary text-base font-primaryMedium text-white rounded-full py-4 w-full"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
