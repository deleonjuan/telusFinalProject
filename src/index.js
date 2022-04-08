import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App";
import "./client/index.css";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import store from "./client/redux";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
