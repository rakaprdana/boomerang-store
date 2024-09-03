import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutTeam from "./components/aboutTeam";
import ProductListPage from "./pages/ProductListPage";

const App = () => {
  return (
    <Router>
      <div className="bg-green-100 text-gray-800">
        <Navbar />
        <LandingPage />
        <AboutTeam />
        <ProductListPage />
      </div>
    </Router>
  );
};
export default App;
