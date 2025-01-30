import CartItems from "../../../components/CartItems/CartItems";
import TreeIcon from "../../../assets/images/icon-carbon-neutral.svg";
const Cart = () => {
  return (
    <div className="bg-white rounded-xl p-6 h-max basis-[30%]">
      <h2 className="font-primaryBold text-primary text-2xl mb-6">
        Your Cart <span>(7)</span>
      </h2>

      <ul>
        <CartItems />
      </ul>

      <div className="flex items-center justify-between mb-6">
        <p className="font-sm text-rose900">Order Total</p>

        <h2 className="font-primaryBold text-rose900 text-2xl">$46.50</h2>
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
};

export default Cart;
