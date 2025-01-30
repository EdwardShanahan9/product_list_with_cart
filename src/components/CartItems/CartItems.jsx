import RemoveIcon from "../../assets/images/icon-remove-item.svg";

const CartItems = () => {
  return (
    <li className="mb-4 pb-4 border-b border-rose100">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-rose900 font-primaryMedium text-sm mb-2">
            Classic Tiramisu
          </h3>

          <div>
            <span className="text-primary font-primaryMedium mr-2">1x</span>

            <span className="text-rose500 font-primaryMedium mr-2">
              @ $5.50
            </span>

            <span className="text-rose500 font-primaryBold mr-2">$5.50</span>
          </div>
        </div>

        <div>
          <img
            className="block border-rose400 border rounded-full p-1"
            src={RemoveIcon}
            alt="Remove Icon"
          />
        </div>
      </div>
    </li>
  );
};

export default CartItems;
