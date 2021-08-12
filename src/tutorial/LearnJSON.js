import React from 'react'
import axios from 'axios'

function LearnJSON() {
    const handleClick = () => {
        const promise = axios.post("http://localhost:4000/users", {
            name: "dakjs"
        }, {
            headers: {
                ['content-type']: 'application/json'
            }
        }
        )
        promise.then(response=>
            {
                console.log(response);
            })
            promise.catch(error=>
                {
                    console.log(error);
                })
               
    }
    const getUser=()=>{  {/*in this we get the user data frrom json server and storing at the array of console*/}
        axios.get("http://localhost:4000/users").then(user=>
        {
            console.log(user);
        })
    }
  
    return (
        <>
            <h1>Random Title</h1>
            <button type='button' className='btn' onClick={handleClick}>post users</button>
            <button type='button' className='btn' onClick={getUser}>get users</button>
        </>
    )
}

export default LearnJSON
