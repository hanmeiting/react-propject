import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import Loayout from "./Loayout/Index";
import { HashRouter, Route } from "react-router-dom";
ReactDOM.render(
  <HashRouter>
    <Loayout />
  </HashRouter>,
  document.getElementById("root")
);
