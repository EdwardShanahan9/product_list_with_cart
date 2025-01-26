import MainLayout from "./layout/MainLayout/MainLayout";
import { AddToCartProvider } from "./context/AddToCart/AddToCartContext";

function App() {
  return (
    <AddToCartProvider>
      <div className="mb-8 p-6 md:p-10 lg:pt-lg lg:pr-xlg lg:pb-lg lg:pl-xlg">
        <MainLayout />
      </div>
    </AddToCartProvider>
  );
}

export default App;
