import React from "react";
import { Link } from "react-router-dom";
import "boxicons";

function Navbar() {
  return (
    <>
      <nav className="bg-green-600 p-4 w-full text-white shadow-md fixed rounded-b-md">
        <div className="container mx-auto font-sans flex items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Boomerang Store
          </Link>
          <div className="flex justify-center items-center mx-4 space-x-4">
            <Link to="/" className="underline-animation">
              Home
            </Link>
            <Link to="/products" className="underline-animation">
              Products
            </Link>
            <Link to="/contact" className="underline-animation">
              Contact
            </Link>
            <Link
              to="/cart"
              className="bg-slate-50 px-4 py-2 w-28 hover:translate-y-1 duration-1000 rounded-md text-gray-800 font-bold flex items-center space-x-2"
            >
              <box-icon type="solid" name="cart"></box-icon>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
