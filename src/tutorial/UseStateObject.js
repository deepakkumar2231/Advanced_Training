import React,{useState} from 'react'

function UseStateObject() {
    const [person,setPerson]=useState({
        name:"star load",
        age:'50',
        message:"i am god"
    });
    const [name,setName]=useState(
        "tony stark"
    )
    const [age,setAge]=useState(45)
    const [message,setMessage]=useState("i am ironman")
    const changeMessage=()=>{
        setPerson({...person,message:"not anymore"});
        setMessage("hello world");
    }
    return (
        <div>
            <>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button classname="btn" onClick={changeMessage}>change my message</button>
            </>
        </div>
    )
}

export default UseStateObject
