import React,{useState } from 'react'
import { Link } from 'react-router-dom';
import {data} from'../data'


function People() {
    const [people,setPeople]=useState(data);
    return (
      <>
      <h1>people page</h1>
      {
          people.map((person)=>{//i is just parameter
              return(
                  <div key={person.id} className='item'>
                      <h4>{person.name}</h4>
                      <Link to={'/person/${person.id}'}>Learn more</Link>
                       </div>

              )
              
          })
      }
      </>
    )
}

export default People
