import { useEffect, useState } from "react";
import Button from "./Button";

const ProductCard = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  return (
    <>
      <div className="grid grid-cols-4 mx-4 gap-4">
        {product.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-sm flex flex-col "
          >
            <img
              src={product.image}
              alt={product.title}
              className="my-4 ml-8 w-28"
            />
            <h2 className="font-bold">{product.title}</h2>
            <p className="pb-8">${product.price}</p>
            <Button label="Add to cart" variant="primary" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
