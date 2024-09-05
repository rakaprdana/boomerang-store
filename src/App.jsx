import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutTeam from "./components/aboutTeam";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <div className="h-screen bg-green-100 text-gray-800">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutTeam />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
