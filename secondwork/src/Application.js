import React from "react";
import {Header} from "./Header";

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
    </div>