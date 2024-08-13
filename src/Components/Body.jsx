import React from 'react'
import Blueshape from '../assets/Blue-Shape.svg'
import Pinkshape from '../assets/Pink-Shape.svg'
import Purpleshape from '../assets/Purple-Shape.svg'
import Heromodel from '../assets/Hero-Model.png'
import Checkmark from '../assets/Checkmark.svg'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex lg:flex-row-reverse lg:px-5'>
      <div className='lg:flex-1 flex items-center justify-center lg:ml-8'>
        <img src={Blueshape} alt="!st"  className='-rotate-[45deg] h-64 md:h-80 lg:h-[400px]'/>
        <img src={Pinkshape} alt="2nd"  className='absolute -rotate-[30deg] h-64 md:h-80 lg:h-[400px]'/>
        <img src={Purpleshape} alt="3rd" className='absolute -rotate-[15deg] h-64 md:h-80 lg:h-[400px]'/>
        <img src={Heromodel} alt="Hero" className='absolute h-64 md:h-80 lg:h-[400px]'/>
      </div>
      <div className='lg:flex-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Host Your Website in Less than 5 minutes</h1>
        <p  className='font-lato text-gray-400'>With hoster , get your website up and running in no less than 5 minutes with compitetive pricing Packages</p>
        <form action="" className='my-4 flex flex-col gap-4 md:flex-row'>
          <input type="email" placeholder='Enter email address' className='rounded-md px-4 py-3 placeholder:text-gray-400'/>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </form>
        <div className='flex gap-2 pt-4 '>
          <img src={Checkmark} alt="check" />
          <p className='font-lato text-gray-400'>No spam , ever . Unsubscribe</p>
        </div>
      </div>
    </div>
  )
}

export default Body