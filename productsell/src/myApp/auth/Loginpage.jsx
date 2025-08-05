import React from 'react'
import { Link } from 'react-router'

function Loginpage() {
  return (
    
    <div className='w-full flex justify-center'>
      <div className='w-sm border rounded-2xl h-auto p-8 shadow-2xl shadow-indigo-500 my-10 items-center text-center'>
        <h1 className='text-4xl font-bold text-indigo-500 animate-pulse'>Zapo</h1>
        <input type="text" placeholder='username' className='outline p-2 rounded-md shadow-md shadow-indigo-400  my-3 w-full' />
         <input type="password" placeholder='password' className='outline p-2 rounded-md shadow-md shadow-indigo-400  my-3 w-full' />
           <p className='my-3'>Don't have any Account <Link to='/registrationpage'><span className='text-indigo-700'>registration now</span></Link></p> 
         <Link to="/">
         <button className='border border-indigo-600 w-full py-2 rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-white my-3 cursor-pointer'>Login</button>
         </Link>
      </div>

    </div>
  )
}

export default Loginpage