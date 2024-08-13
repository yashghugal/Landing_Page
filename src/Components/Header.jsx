import React from 'react'
import logo from '../assets/Logo.svg'
import { FaBars } from "react-icons/fa";


const Header = () => {
    return (
        <div className='flex  sm:p-5 justify-between items-center p-2 lg:p-3'>
            <div className='flex items-center gap-4'>
                <img src={logo} alt="logo" />
                <div className='bg-gradient-to-r from-orange-400 to-red-600 text-sm text-white px-2 py-1 rounded-2xl '>Hoster is Hiring</div>
            </div>
            <div className='hidden lg:block'>
                <ul className='flex gap-5 font-lato'>
                    <li>Plans</li>
                    <li>Find Domins</li>
                    <li>Why Hoster</li>
                </ul>
            </div>
            <div className='hidden lg:flex items-center gap-3'>
                <p className='font-lato'>Sign In</p>
                <button className='bg-blue-500 text-white font-lato px-3 py-2 rounded-md'>Join Waitlist</button>
            </div>
            <button className='block lg:hidden'><FaBars/></button>
        </div>
    )
}

export default Header