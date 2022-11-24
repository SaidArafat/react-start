import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals";
import "@fortawesome/fontawesome-free/css/all.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

reportWebVitals();
