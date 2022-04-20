import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/app.scss";
import "./assets/Library-min/fontawesome/css/all.min.css";
import "./assets/Library-min/lineawesome/css/line-awesome.min.css";
import "./assets/Library-min/bootstrap/css/bootstrap.min.css";
import "./assets/Library-min/swiper/swiper-bundle.min.css";
import "./assets/Library-min/animate/animate.min.css";
import "./assets/Library-min/hint/hint.min.css";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
