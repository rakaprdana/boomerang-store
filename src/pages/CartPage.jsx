import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from "react";
const CartPage = () => {
  const location = useLocation();
  const [products, setProduct] = useState([]);
  const { cart } = location.state || { cart: [] };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/?limit=10")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  //Menghitung total
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  return (
    <>
      <div
        id="/cart"
        className="h-screen border border-black flex justify-between items-center"
      >
        <div className="border border-yellow-500 ml-8 my-8 py-4 px-4 w-1/2 bg-slate-50 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold mb-4">Name Product</h1>
            <p className="text-lg font-medium mr-4">Price List</p>
          </div>
          <div className="border border-red-500">
            {products.map((products, index) => (
              <div key={index} className="flex justify-between">
                {/* <img src={products.image} alt="" className="w-4" /> */}
                <p>{products.title}</p>
                <p className="mr-4">{products.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <hr className="border-t-4 border-black w-auto my-4" />
          <div className="flex justify-between px-4">
            <p className="font-medium text-lg">Total</p>
            <p>$00.0</p>
          </div>
        </div>
        <div className="border border-yellow-300 bg-slate-50 p-4 w-2/5 h-3/4 mr-8 mt-16 rounded-lg">
          <h1 className="text-xl mb-4 font-bold">Calculate Total</h1>
          <div className="flex justify-between space-x-16">
            <h2 className="text-lg font-medium">Name Products</h2>
            <p className="text-lg font-medium">Price List</p>
          </div>
          <hr className="border-t-2 rounded-lg border-black my-4" />
          <div className="flex justify-between my-4">
            <p>Total</p>
            <p>{totalPrice.toFixed(2)}</p>
          </div>
          <Button label="Checkout" variant="primary" />
        </div>
      </div>
    </>
  );
};

export default CartPage;
