import MainLayout from "./layout/MainLayout/MainLayout";
import { CartContextProvider } from "./context/CartContext/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="mb-8 p-6 md:p-10 lg:pt-lg lg:pr-xlg lg:pb-lg lg:pl-xlg">
        <MainLayout />
      </div>
    </CartContextProvider>
  );
}

export default App;
