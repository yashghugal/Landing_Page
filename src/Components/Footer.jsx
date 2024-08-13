import React from 'react'
import Helpsvg from '../assets/Help-Avatar.svg'

const Footer = () => {
  return (
    <div className=' flex flex-col md:flex-row md:justify-between md:items-center px-8'>
      <ul className='flex text-center font-lato gap-5 text-gray-400 lg:mt-10 md:gap-8 lg:gap-12'>
        <li><a href="#" className='hover:text-blue-500'>Facebook</a></li>
        <li><a href="#" className='hover:text-blue-500'>Instagram</a></li>
        <li><a href="#" className='hover:text-blue-500'>Twitter</a></li>
      </ul>
      <div className='flex gap-3 my-4 lg:mt-10' >
        <img src={Helpsvg} alt="Help" />
        <div>
          <p className='font-playfair font-thin'>Have a Questions ?</p>
          <a href="" className='font-lato font-semibold'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer