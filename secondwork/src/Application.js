import React , {useState} from "react";
import {Header} from "./Header";
import {List} from "./List";

const Counter=()=>{
        const [count, setCount]=useState(1);
        // setInterval(()=>{
        //     setCount(count+1)
        // },1000)
        // const count=1;
    return <div>
        <button onClick={()=>setCount(count-1)}>-</button>
            {count}
        <button onClick={()=>setCount(count+1)}>+</button>
        </div>};




export const Application=()=>
    <div className='Wrapper'>
        <Counter></Counter>
        <Header logoText="Application" navItems={
            [
                {
            label:'Home',
            href:'/',
        },
                {
                    label:'Contact',
                    href:'/contact',
                },
        ]
        }/>
        <List/>
    </div>