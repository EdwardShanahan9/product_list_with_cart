import Product from "../../../components/Product/Product";
import Data from "../../../../data.json";

const Products = () => {
  return (
    <div>
      <h1 className="text-4xl font-primaryBold">Desserts</h1>

      <div>
        {Data.map((product, index) => (
          <Product
            key={index}
            category={product.category}
            image={product.image.mobile}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
