import MainLayout from "./layout/MainLayout/MainLayout";
import { ButtonActiveProvider } from "./context/ButtonActive/ButtonActiveContext";

function App() {
  return (
    <ButtonActiveProvider>
      <div className="mb-8 p-6 md:p-10 lg:pt-lg lg:pr-xlg lg:pb-lg lg:pl-xlg">
        <MainLayout />
      </div>
    </ButtonActiveProvider>
  );
}

export default App;
