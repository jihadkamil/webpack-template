import React from "react";
import { render } from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import App from "./app.js";
const rootElement = document.getElementById("react-app");

render(
  <div>
    {" "}
    <App></App>
  </div>,
  rootElement
);
