/* eslint-disable no-unused-vars */
//jsx es html + js
//la app de react siempre cuenta con estos dos imports
import React from "react";
import ReactDOM from "react-dom/client";
import HelloWorldApp from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import {CounterApp} from './CounterApp';

import './styles.css' //se debe importar para tener estilos globales

ReactDOM.createRoot(document.getElementById("root")).render(
  //miramos que el index.html tiene un id root, allí se renderiza todo y renderizamos a App
  <React.StrictMode>
    {/* <HelloWorldApp/> */}

    {/* enviamos props */}
    {/* <FirstApp title="Esto es una prop" subtitle={123}/> */}
    <CounterApp value={123}/>
  </React.StrictMode>
);
