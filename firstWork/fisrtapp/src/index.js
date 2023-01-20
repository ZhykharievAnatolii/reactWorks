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

// const header=(
//     <header>
//         <a href="">Logo</a>
//     </header>
// )
//
// const number=5;
// const type='succes';
// const firstReactElement=(
//     <div>
//         {header}
//     <span className={ type==="succes"?'succes':'error'}>
//         {number}
//         <h1>Inner</h1>
//     </span>
//     </div>
// );
// const secondReactElement=createElement('div',null,'Hello,world!');
// В реакте существуют специальные функции, которые называются компонентами,

import React,{createElement} from "react";
import {createRoot} from 'react-dom/client';

const data=[
    {
        id:1,
        name:'Anatolii',
        position:'Fronend'
    },
    {
        id:2,
        name:'Bohdan',
        position:'Backend'
    },
    {
        id:3,
        name:'Yura',
        position:'Design'
    }
];
function Card({name,position}) {
    // const card=

        return (
        <li>
            <h2>
                {name}
            </h2>
            <p>
                {position}
            </p>
        </li>
    )
}


// все компоненты называем с большой буквы, функция должна возвращать верстку


const root= document.querySelector('#root');
// createRoot(root).render(
//     <ul>
//         <Card name={data[0].name} position={data[0].position}/>
//         <Card name={data[1].name} position={data[1].position}/>
//         <Card name={data[2].name} position={data[2].position}/>
//     </ul>);

    //
    // return <Card name={name} position={position}/>})
// createRoot(root).render(
//     <ul>
//         {
//             data.map(({position,name, id})=>{
//             return <Card name={name} position={position}/>
//             })
//         }
//     </ul>)
// const renderedArr=

// const additional=[<Card name='Alina' position='Devops'/>, <Card name='Oleksiy' position='Manager'/>]

    createRoot(root).render(
        <ul>
            {data.map(({position,name, id})=>{
            return <Card name={name} position={position} key={id}/>
        })}
        </ul>)
// Для перебора елементов для перерисовки не подойдет forEach
