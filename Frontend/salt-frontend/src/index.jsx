import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();
const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
