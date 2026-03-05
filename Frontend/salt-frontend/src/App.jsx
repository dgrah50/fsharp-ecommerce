import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import CartPage from "./pages/Cart/index.jsx";
import ResultsPage from "./pages/Results/index.jsx";
import ProductPage from "./pages/Product/index.jsx";
import HomePage from "./pages/Home/index.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/results/:query" element={<ResultsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
