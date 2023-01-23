import React , {useState} from "react";
import {Header} from "./Header";
import {List} from "./List";
import {faker} from '@faker-js/faker'

const Undefined=()=>{
    const [profile,setProfile]=useState({email:faker.random.word(), username:faker.random.word()})


    return(
        <div>
            <p>
                Email:{profile.email}
            </p>
            <p>
                Username:{profile.username}
            </p>
        </div>
    )
}



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
       <Undefined/>
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