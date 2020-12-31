import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
// import Router01 from "../src/Pages/router-demo/router"
// import RouterExit from "./Pages/router-demo02/router-exit"
import Routers from "./Pages/router"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
 
    <Routers />
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
