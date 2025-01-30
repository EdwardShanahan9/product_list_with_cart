import Product from "../../../components/Product/Product";
import Data from "../../../../data.json";

const Products = () => {
  return (
    <div className="basis-[65%]">
      <h1 className="text-4xl font-primaryBold mb-8">Desserts</h1>

      <div className="md:grid md:grid-cols-3 gap-6">
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
