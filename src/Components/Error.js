import React from 'react'
import error from '../Images/error.jpg'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div className = 'flex h-screen w-screen justify-center items-center text-lg sm:text-2xl'>
    <div>
        <img src={error} alt="" srcset="" className='h-48 sm:h-96'/>
        <Link to="/" className='flex justify-center items-center bg-orange-500 rounded-xl p-3 hover:bg-transparent border-2 hover:border-black'>Go to Home</Link>
        
    </div>
    
    </div>
  )
}
