import React,{useState} from 'react'

function UseStateObject() {
    const [person,setPerson]=useState({
        name:"star load",
        age:'50',
        message:"i am god"
    });
    const changeMessage=()=>{
        setPerson({...person,message:"not anymore"});
    }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button classname="btn" onClick={changeMessage}>change my message</button>
            </>
        </div>
    )
}

export default UseStateObject
