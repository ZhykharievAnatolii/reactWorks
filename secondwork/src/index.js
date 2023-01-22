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
