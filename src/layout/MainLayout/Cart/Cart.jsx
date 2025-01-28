import CartItems from "../../../components/CartItems/CartItems";
import TreeIcon from "../../../assets/images/icon-carbon-neutral.svg";
const Cart = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="font-primaryBold text-primary text-2xl mb-6">
        Your Cart <span>(7)</span>
      </h2>

      <ul>
        <CartItems />
      </ul>

      <div>
        <p>Order Total</p>

        <h2 className="font-primaryBold text-rose900 text-2xl">$46.50</h2>
      </div>

      <div>
        <img src={TreeIcon} alt="Tree Icon" />

        <p>
          This is a <span> carbon-neutral</span> delivery
        </p>
      </div>

      <button>Confirm Order</button>
    </div>
  );
};

export default Cart;
