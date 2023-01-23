import React from 'react';
import {createRoot} from "react-dom/client";
import {Application} from "./Application";
import {Header} from "./Header";
import './index.css'
const root=createRoot(document.querySelector('#root'));

// const component=(<header>
//     Test
// </header>)






root.render(
    <Application/>
)

// Написанное с маленькой буквы воспринимается как тег, написанное с большой будет восприниматься как компонент
// написанное в {} скобках подразумевает выражение кода написанное выше, все что без скобок будет восприниматься как строка

// В реакте есть поянтие виртуального дома, обрабатывается сначала он, оптимизирует очередность выполнения задач, после
// синнхронизирует с обычным домом
// React будт перерисовывать страницу только если изменились пропсы или же изменился стейт

// Стейт- состояние в реакт, возможность хранить и видоизменять данные, за стейтом следит реакт
// let count=1;
// setInterval(()=>{
//     count+=1
//     console.log(count)
// },1000)--реакт не реагирует
