import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link, NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className=' py-10 '>
      <div className='md:flex md:justify-between items-center md:mx-20 mx-5  '>
        <div >
          <Link to='/' onClick='/'>
            <h1 className='text-3xl font-semibold tracking-wide'>ray.</h1>
          </Link>
        </div>
        <div className='md:w-[40%] w-full mt-5 md:mt-0'>
          <h1 className='text-xl font-medium mb-4 w-full'>Subscribe to our newsletter to receive skincare tips from Hilde and more.</h1>
          <form action="/" className='flex items-center gap-2 relative'>
            <input 
              type="email" 
              placeholder='email address here' 
              className='w-full px-5 py-5 border  mt-5 md:mt-0 outline-gray-600 focus:outline-none  focus:border-gray-200'
            />
            <button type="submit" className=' text-black p-2 absolute right-2 '>
              <GoArrowRight className='text-black font-bold' size={20} />
            </button>
            
         
          </form>
          <div>
            <p className='text-sm md:text-base text-gray-400 font-semibold tracking-tight mt-3 font-sans'>Subscribing means you agree to our <span className='underline cursor-pointer tracking-tight  font-sans'>privacy policy.</span></p>
            </div>
        </div>
      </div>
      <hr className="my-20 border-gray-200" />
      <div>
        <div className='grid grid-cols-2 md:flex md:justify-between items-start mx-5 md:mx-20 overflow-x-hidden gap-8 md:gap-0'>
          <div className='flex flex-col gap-4'>
            <Link to="/" className='hover:text-gray-600'>Shop all</Link>
            <Link to="/" className='hover:text-gray-600'>Face</Link>
            <Link to="/" className='hover:text-gray-600'>Body</Link>
            <Link to="/" className='hover:text-gray-600'>Hair</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <Link to="/" className='hover:text-gray-600'>Our story</Link>
            <Link to="/" className='hover:text-gray-600'>Points of sale</Link>
            <Link to="/" className='hover:text-gray-600'>Jobs</Link>
          </div>
       
          <div className='flex flex-col gap-4 md:ml-40'>
            <Link to="/" className='hover:text-gray-600'>TikTok</Link>
            <Link to="/" className='hover:text-gray-600'>Instagram</Link>
            <Link to="/" className='hover:text-gray-600'>abc@gmail.com</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <Link to="/" className='hover:text-gray-600'>Contact</Link>
            <Link to="/" className='hover:text-gray-600'>FAQ</Link>
            <Link to="/" className='hover:text-gray-600'>Shipping</Link>
          </div>
          <div className='flex flex-col gap-4'>
            <Link to="/" className='hover:text-gray-600'>Shipping</Link>
            <Link to="/" className='hover:text-gray-600'>Partner webshop</Link>
            <Link to="/" className='hover:text-gray-600'>Terms and conditions</Link>
            <Link to="/" className='hover:text-gray-600'>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mx-20 my-10'>
        <h1 className='text-base   text-gray-400 font-semibold tracking-tight mt-3 font-sans'>Ray Care BV © 2025</h1>
      </div>
    </div>
    
  )
}

export default Footer
