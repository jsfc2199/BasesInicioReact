/* eslint-disable no-unused-vars */
//jsx es html + js
//la app de react siempre cuenta con estos dos imports
import React from "react";
import ReactDOM from "react-dom/client";

// import FirstApp from "./FirstApp";
// import CounterApp from "./CounterApp";

import './styles.css'
import HelloWorldApp from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById("root")).render(
  //miramos que el index.html tiene un id root, allí se renderiza todo y renderizamos a App
  <React.StrictMode>
    <HelloWorldApp/>
  </React.StrictMode>
);
