import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useState, useEffect } from "react";
const CartPage = () => {
  const location = useLocation();
  const [products, setProduct] = useState([]);
  const { cart } = location.state || { cart: [] };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/?limit=5")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);
  //Menghitung total
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  return (
    <>
      <Navbar />
      <div className="bg-green-100">
        <div id="/cart" className="flex justify-between bg-green-100">
          <div className="border border-red-500 bg-slate-50 p-4 w-7/12 mt-28 rounded-lg ml-4 flex justify-between">
            <h1 className="text-xl font-bold mb-4">Name Product</h1>
            <p className="text-lg font-medium">Price List</p>
          </div>
          {products.map((products, index) => (
            <div key={index} className="flex justify-between">
              <p>{products.title}</p>
              <p>{products.price.toFixed(2)}</p>
            </div>
          ))}
          <div className="border border-yellow-300 bg-slate-50 p-4 w-1/3 h-3/4 mr-8 mt-28 rounded-lg">
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
      </div>
    </>
  );
};

export default CartPage;
