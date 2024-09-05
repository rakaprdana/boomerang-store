import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { useState, useEffect } from "react";
const CartPage = () => {
  const location = useLocation();
  const [products, setProduct] = useState([]);
  const { cart } = location.state || { cart: [] };
  const priceFee = [1.5, 0.5];
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/?limit=10")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  //Menghitung total
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  return (
    <>
      <div id="/cart" className="flex justify-between pt-24">
        <div className="ml-8 py-4 px-4 w-1/2 bg-slate-50 rounded-lg">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold mb-4">Name Product</h1>
            <p className="text-lg font-medium mr-4">Price List</p>
          </div>
          {products.map((products, index) => (
            <div key={index} className="flex justify-between">
              <p>{products.title}</p>
              <p className="mr-4">{products.price.toFixed(2)}</p>
            </div>
          ))}
          <hr className="border-t-4 border-black w-auto my-4" />
          <div className="flex justify-between px-4">
            <p className="font-medium text-lg">Total</p>
            <p>$0.00</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 h-1/3 w-2/5 mr-8 rounded-lg">
          <h1 className="text-xl mb-4 font-bold">Summary</h1>
          <div className="flex justify-between space-x-16">
            <div className="flex flex-col">
              <p className="text-lg font-medium">Price Total</p>
              <p className="text-lg font-medium">Shipping Costs</p>
              <p className="text-lg font-medium">Service Fees</p>
              <p className="text-lg font-medium">Application Service Fees</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium">$0.00</p>
              <p className="text-lg font-medium">${priceFee[0]}</p>
              <p className="text-lg font-medium">${priceFee[1]}</p>
              <p className="text-lg font-medium">$${priceFee[1]}</p>
            </div>
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
