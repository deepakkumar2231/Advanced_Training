import React,{useState } from 'react'
import {data} from'../data'


function People() {
    const [people,setPeople]=useState(data);
    return (
      <>
      <h1>people page</h1>
      {
          people.map((i)=>{//i is just parameter
              return(
                  <div key={i.id} className='item'>
                      <h4>{i.name}</h4>

                  </div>

              )
              
          })
      }
      </>
    )
}

export default People
