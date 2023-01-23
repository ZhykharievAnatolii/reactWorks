import React, {useState} from "react";
import {Listitem} from "./Listitem";
import {faker} from '@faker-js/faker'


export const List = () => {
const [data,setData]=useState([]);
function handleAdd() {
    setData([...data,{
        id: faker.random.numeric(),
        title: faker.random.word()

    }])
}

  return(
      <div className="container mt-4">
          <div>{}</div>
          <div className="row">
              {
                  data.map(({id,title})=>{
                      return(
                      <Listitem handleClick={()=>{
                          const dataItem=data.find((item)=>item.id===id)
                          setData(data.filter((item)=>item!==dataItem))
                      }} key={id} id={id} title={title}/>
                      );
                  })
              }
          </div>
          <button onClick={handleAdd}>Add</button>
      </div>
  )

}