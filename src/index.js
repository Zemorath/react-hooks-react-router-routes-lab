import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import NavBar from "./components/NavBar";
import Directors from "./components/Directors";
import Actors from "./components/Actors";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
