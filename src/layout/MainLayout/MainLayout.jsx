import OrderConfirmed from "../../components/OrderConfirmed/OrderConfirmed";
import Cart from "./Cart/Cart";
import Products from "./Products/Products";

const MainLayout = () => {
  return (
    <div className="lg:flex lg:justify-between">
      <Products />
      <Cart />
      <OrderConfirmed />
    </div>
  );
};

export default MainLayout;
