import React from "react";
import {Header} from "./Header";
import {List} from "./List";

export const Application=()=>
    <div className='Wrapper'>
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