import Button from "../Button/Button";

const Product = ({ category, image, price, name }) => {
  return (
    <div className="mb-6">
      <div className="mb-4 relative flex items-center justify-center">
        <img className="rounded-lg " src={image} alt={name} />

        <Button />
      </div>

      <div className="mt-6">
        <h4 className="mb-1 text-sm text-rose500">{category}</h4>

        <h2 className="mb-1 text-base font-primaryMedium text-rose900">
          {name}
        </h2>

        <h3 className="text-primary text-base font-primaryMedium">${price}</h3>
      </div>
    </div>
  );
};

export default Product;
