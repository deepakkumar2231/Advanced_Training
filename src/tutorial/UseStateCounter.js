import React,{useState} from 'react'

function UseStateCounter() {
    const [value,setValue]=useState(0);
    const complexIncrease=()=>{
        setTimeout(()=>{setValue((prevState)=>
            {
                return prevState+1;//passing  a function through setValue of use state
            });

            //passing  a hard value  through setValue of use state
        },2000)
    }
    return (
        
            <>
            <section style={{margin:'4rem 0'}}>
                <h2>regular counter</h2>
                <h2>{value}</h2>
                <button className='btn' onClick={()=>setValue(value - 1)}>deccrease</button>
                <button className='btn' onClick={()=>setValue(value + 1)}>increase</button>
                <button className='btn' onClick={()=>setValue(0)}>reset</button>
            </section>


            <section style={{margin:'4rem 0'}}>
                <h2>complex counter</h2>
                <h2>{value}</h2>
                
                <button className='btn' onClick={(complexIncrease)}>increase later</button>
            </section>
            </>
        
    );
}

export default UseStateCounter
