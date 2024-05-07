import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
function Navbar() {
  return (
    <>
    <div className='flex justify-between bg-black'>
        <div className='flex justify-center items-center home-icon bg-red-600 text-white p-2'>
            <IoHome />
        </div>
    
            <ul className='flex list-none gap-6 justify-evenly'>
            <li className=' hover:bg-red-500'>Solution</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>About</li>
            </ul>
            <MdOutlineDarkMode/>
    
        <div className='flex justify-center items-center home-icon bg-red-600 text-white p-2'>
            <IoSearchOutline />
        </div>
        </div>
    </>
  )
}

export default Navbar