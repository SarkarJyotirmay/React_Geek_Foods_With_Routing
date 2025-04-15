import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
   <>
   <div className="nav-container h-[75px] py-4 px-6 bg-[#111827] text-white font-semibold flex justify-between items-center">

    <div className="left flex gap-4">
        <img src="/logo.svg" alt="" />
        <Link to="/" className='text-2xl font-bold'>GeekFoods</Link>
    </div>

    <div className="middle">
        <ul className='flex gap-5'>
            <li className='text-blue-500'>
                <Link to="/">Home</Link>
            </li>
            <li className='hover:text-blue-500'>
                <Link to="/quote">Quote</Link>
            </li>
            <li className='hover:text-blue-500'>
                <Link to="/restaurent">Restaurent</Link>
            </li>
            <li className='hover:text-blue-500'>
                <Link to="/foods">Foods</Link>
            </li>
            <li className='hover:text-blue-500'>
                <Link to="/contact">Contact</Link>
            </li>
            
        </ul>
    </div>

    <div className="right w-[150px]">
        <button className='bg-blue-600 w-[120px] py-1.5 rounded-md hover:bg-blue-800 active:border-5 active:border-blue-900 cursor-pointer transition-all ease-out duration-300'>Sign Up</button>
    </div>

   </div>
   </>
  )
}

export default Nav