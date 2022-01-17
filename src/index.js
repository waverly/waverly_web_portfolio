import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => {
  return <App />
 
};

render(<Root />, document.querySelector("#root"));
registerServiceWorker();
