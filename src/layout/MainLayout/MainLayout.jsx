import Cart from "./Cart/Cart";
import Products from "./Products/Products";

const MainLayout = () => {
  return (
    <div className="lg:flex lg:justify-between">
      <Products />
      <Cart />
    </div>
  );
};

export default MainLayout;
