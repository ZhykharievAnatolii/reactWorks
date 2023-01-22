import React from "react";
import {Listitem} from "./Listitem";

export const List = () => {

    const data=[
        {
            id:2,
            title:'First',

        },
        {
            id:4,
            title:'Second',

        }
    ]
  return(
      <div className="container mt-4">
          <div className="row">
              {
                  data.map(({id,title})=>{
                      return <Listitem key={id} id={id} title={title}/>
                  })
              }
          </div>
      </div>
  )

}