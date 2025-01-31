import { useContext, useEffect, useState } from "react";
import Button from "../Button/Button";

const Product = ({ category, image, price, name }) => {
  const [isActive, setIsActive] = useState(false);
  let [productImage, setProductImage] = useState("");
  const handleActivate = () => setIsActive(true);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 480) {
      setProductImage(image.mobile);
    } else if (windowWidth >= 480 && windowWidth < 1024) {
      setProductImage(image.tablet);
    } else if (windowWidth >= 768 && windowWidth >= 1024) {
      setProductImage(image.desktop);
    }

    console.log(productImage);
  }, [productImage]);

  return (
    <div className="mb-6">
      <div className="mb-4 relative flex items-center justify-center">
        <img
          className={`rounded-lg ${isActive ? "border-2 border-primary" : ""}`}
          src={productImage}
          alt={name}
        />

        <Button
          product={{ category, image, price, name }}
          onActivate={handleActivate}
        />
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
