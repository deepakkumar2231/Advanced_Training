import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
            <h1>404 page not found</h1>
            
            <Link to='/' className='item'>GO TO HOME</Link>
           </> 
    )
}

export default Error
