
import React from 'react'
import { FaBlogger } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa6";

function DashboardHeader() {
    return (
        <div className='flex bg-slate-100 p-5 items-center justify-between'>
            <div className='flex space-x-4'>
                <RxHamburgerMenu className='text-3xl' />
                <FaBlogger className='text-3xl' />
            </div>
            <div className='flex py-2 '>
                <IoIosSearch className='text-4xl bg-slate-300 text-slate-100'/>
                <input type="text" placeholder='search here ....' className='text-3xl bg-slate-300 text-black focus:border-blue-500 focus:outline-none focus:ring-blue-500' />
                <IoIosInformationCircleOutline  className='text-4xl bg-slate-300 text-slate-100'/>
            </div>
            <div>
                <FaRegQuestionCircle  className='text-3xl' />
            </div>
            <div>
                <FaCircle  className='text-3xl'/>
            </div>
        </div>
    )
}

export default DashboardHeader