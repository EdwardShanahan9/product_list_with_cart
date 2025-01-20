const Product = ({ category, image, price, name }) => {
  console.log(image.mobile);
  return (
    <div>
      <div>
        <img src={image} alt={name} />

        <button>Add to Cart</button>
      </div>

      <div>
        <h4>{category}</h4>

        <h2>{name}</h2>

        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default Product;
