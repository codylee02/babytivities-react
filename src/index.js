import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { BabytivitiesProvider } from "./context/BabytivitiesContext";

ReactDOM.render(
  <BrowserRouter>
    <BabytivitiesProvider>
      <App />
    </BabytivitiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
