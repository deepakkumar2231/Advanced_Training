import React,{useState} from 'react'
//use state is a named import so we must must have the curly braces

//some basic rules of all hooks 

function UseStateBasic() {
    const [day,setDay]=useState("today is rainy day:(");
    const handleClick=()=>{
        if(day==="today is rainy day:("){

        
        setDay("Today is bright")
        }
        else
        {
            setDay("today is rainy day(")
        }
    };
    return (
        <div>
            <>
            <h1>{day}</h1>
            
        <button type="button" className="btn" onClick={handleClick}>
            change my day
            </button>)
            </>
        </div>
    )
}

export default UseStateBasic
