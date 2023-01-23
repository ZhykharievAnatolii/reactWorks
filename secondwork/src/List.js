import React, {useState} from "react";
import {Listitem} from "./Listitem";
import {faker} from '@faker-js/faker'


export const List = () => {
const [data,setData]=useState([]);
window.setData=setData();
function handleAdd() {
    
}

  return(
      <div className="container mt-4">
          <div>{}</div>
          <div className="row">
              {
                  data.map(({id,title})=>{
                      return <Listitem key={id} id={id} title={title}/>
                  })
              }
          </div>
          <button onClick={handleAdd}>Add</button>
      </div>
  )

}