import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App/Assets/css/layouts/footer.css";
import "./App/Assets/css/layouts/header.css";
import "./App/Assets/css/slider.css";
import "./App/Assets/css/Home.css";
import "./App/Assets/css/footer-links.css";
import "./App/Assets/css/auth.css";
import "./App/Assets/css/products.css";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
