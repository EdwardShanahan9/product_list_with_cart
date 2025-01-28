import RemoveIcon from "../../assets/images/icon-remove-item.svg";

const CartItems = () => {
  return (
    <li>
      <div>
        <h3>Classic Tiramisu</h3>

        <div>
          <span>1x</span>

          <span>@ $5.50</span>

          <span>$5.50</span>
        </div>

        <div>
          <img src={RemoveIcon} alt="Remove Icon" />
        </div>
      </div>
    </li>
  );
};

export default CartItems;
