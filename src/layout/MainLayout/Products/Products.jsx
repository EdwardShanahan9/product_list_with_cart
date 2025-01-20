import Product from "../../../components/Product/Product";
import Data from "../../../../data.json";

const Products = () => {
  return (
    <div>
      <h1 className="text-4xl font-primaryBold">Desserts</h1>

      <div>
        <Product
          category={Data[0].category}
          image={Data[0].image.mobile}
          name={Data[0].name}
          price={Data[0].price}
        />
      </div>
    </div>
  );
};

export default Products;
