// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// jsx- микс написания в переменой js , css, html

// Вместо class в верстке используется  className

import React,{createElement} from "react";
import {createRoot} from 'react-dom/client';

const header=(
    <header>
        <a href="">Logo</a>
    </header>
)

const number=5;
const type='succes';
const firstReactElement=(
    <div>
        {header}
    <span className={ type==="succes"?'succes':'error'}>
        {number}
        <h1>Inner</h1>
    </span>
    </div>
);





    // const secondReactElement=createElement('div',null,'Hello,world!');
const root= document.querySelector('#root');
createRoot(root).render(firstReactElement);
