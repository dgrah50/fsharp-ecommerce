import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navBar.jsx";
import CartPage from "./pages/Cart/index.jsx";
import ResultsPage from "./pages/Results/index.jsx";
import ProductPage from "./pages/Product/index.jsx";
import HomePage from "./pages/Home/index.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/cart" component={CartPage} />
        <Route path="/results/:query" component={ResultsPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
