import React from 'react'
import { Link } from 'react-router'
function Navbar() {
  return (
   <>
   <div className='w-full h-16 bg-indigo-700 flex justify-between items-center md:px-4 px-2 '>
    <div>
        <img className='w-12 h-12 cursor-pointer md:ms-10' src="https://png.pngtree.com/png-vector/20230218/ourmid/pngtree-best-product-label-badge-red-design-png-image_6607151.png" alt="" />
    </div>
    <div>
        <ul className='md:flex hidden'>
          <li>
            <Link to="/" className='mx-3 text-white cursor-pointer hover:text-indigo-300'>Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className='mx-3 text-white cursor-pointer hover:text-indigo-300'>About Us</Link>
          </li>
          <li>
            <Link to="/contact" className='mx-3 text-white cursor-pointer hover:text-indigo-300'>Contact Us</Link>
          </li>
        </ul>
    </div>
    <div>
      <Link to="loginpage"><button className='w-24 h-10 bg-indigo-600 text-white rounded-sm hover:text-indigo-600 hover:bg-white md:block hidden  '>Login</button></Link>
    </div>
    <div className='md:hidden text-4xl text-white'>
      <Link to="">&#8801;</Link>
    </div>
   </div>
   </>
  )
}

export default Navbar