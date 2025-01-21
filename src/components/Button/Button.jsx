import IconCart from "../../assets/images/icon-add-to-cart.svg";

const Button = () => {
  return (
    <button className="absolute bottom-2 translate-y-2/3  bg-white py-3 px-7 border border-rose400 rounded-full flex items-center text-rose900 font-primaryBold text-sm">
      <img className="mr-2" src={IconCart} alt="Cart Icon" />
      Add to Cart
    </button>
  );
};

export default Button;
