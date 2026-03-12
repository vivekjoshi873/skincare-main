import React from 'react'
import Navbar from '../components/Header/Navbar'
import tanningCream from '../assets/tanning-cream.webp'
import tanningCreamScroll1 from '../assets/tanningdrops-girl.avif'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AddCart } from '../context/AddCart';
import { IoAddOutline } from "react-icons/io5";
import { useState, useRef, useContext } from 'react';
function TanningCream() {
  const { addtoCart } = useContext(AddCart);
  const productSliderRef = useRef(null);
  const [isRotated, setIsRotated] = useState(false);
  const [showText, setShowText] = useState(false);

  const product = {
    id: 3,
    name: "Tanning Cream",
    price: 895,
    image: tanningCream,
    description: "Tanning Cream",
    quantity: 1
  };

  function slideLeftProduct() {
    if (productSliderRef.current) {
      productSliderRef.current.scrollLeft -= 1000;
    }
  }

  function slideRightProduct() {
    if (productSliderRef.current) {
      productSliderRef.current.scrollLeft += 1000;
    }
  }
  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-9'>
        <h5 className='text-sm font-medium m-4 mx-9 text-gray-400 font-sans'>Tanning Duo</h5>
        <div className='flex flex-col md:flex-row'>
          <div className='relative w-full md:max-w-[55%] rounded-md p-2 md:p-10 mx-2 md:mx-6 overflow-hidden'>
            <div
              ref={productSliderRef}
              className='flex scroll-smooth transition-all duration-300'
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory',
                overflowX: 'scroll',
                scrollBehavior: 'smooth',
              }}
            >
              <div className='min-w-full w-full flex-shrink-0 scroll-snap-align-start flex justify-center items-center bg-zinc-100 m-1 md:m-4'>
                <img src={tanningCream} alt="Curly Cream" className='w-full h-[500px] md:h-[800px] object-contain rounded-md p-4 md:p-20' />
              </div>
              <div className='min-w-full md:min-w-[120%] h-[500px] md:h-[800px] w-full flex-shrink-0 scroll-snap-align-start flex justify-center items-center'>
                <img src={tanningCreamScroll1} alt="Curly Cream2" className='w-full md:w-[190%] h-full object-cover rounded-md' />
              </div>
            </div>
            <div className='absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-10'>
              <button onClick={slideLeftProduct} className='bg-white p-2 rounded-full shadow-md hidden md:block'>
                <MdKeyboardArrowLeft size={24} />
              </button>
            </div>
            <div className='absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-10'>
              <button onClick={slideRightProduct} className='bg-white p-2 rounded-full shadow-md hidden md:block  '>
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
          </div>
            <div className='mt-6 md:mt-14 mx-2 md:mx-14 w-full md:max-w-[30%] '>
            <h1 className='text-xl font-medium nav-link-curly'>★★★★★ <span className='mx-2 text-sm text-gray-500'> 1212 reviews</span></h1>
            <p className='text-3xl md:text-4xl font-medium mt-4 nav-link-curly'>Tanning Duo</p>
            <p className='text-md font-medium mt-4 nav-link-curly'>30ml - 100ml</p>
            <hr className='my-4 w-full md:w-[30vw]' />
            <div className=''>
              <p className='font-medium nav-link-curly text-sm md:text-base'>Effortlessly create a natural, sun-kissed complexion on your face and body with this duo. Visible effect after a few hours and intensifies with repeated use. Free from orange undertones, annoying odour and stains on clothes.</p>
              <p className='mt-4 font-medium nav-link-curly text-sm md:text-base  w-[90%] md:w-[30vw]'>This routine includes the Ray Tanning Drops (30ml) and the Ray Tanning Cream (100ml).</p>
              <hr className='my-8 w-full md:w-[30vw]' />  
            </div>
            <div>
              <div
                onClick={() => {
                  setIsRotated(!isRotated);
                  setShowText(!showText);
                }}
                className='flex justify-between  items-center cursor-pointer'>
                <h1 className='text-md font-medium nav-link-curly tracking-wide'>How to use</h1>
                <span className='text-sm font-medium nav-link-curly tracking-wide transition-transform duration-300 w-[10vw] md:w-0'>
                  <IoAddOutline className={`${isRotated ? 'rotate-45' : 'rotate-0'} transition-transform duration-300`} size={18} />
                </span>
              </div>
              {showText && (
                <div className='mt-4 text-gray-600 opacity-0 translate-y-2 animate-fadeIn'>
                  <p className='text-sm md:text-md text-black font-medium tracking-wide my-4 md:my-6'>Step 1: <span className='text-sm md:text-md text-gray-500'>Apply your day and night cream to your hands and mix with an amount of Ray Self-Tanning Drops the size of 1 pea for the face. The dosage can be easily adjusted for a more intense or more subtle color.</span></p>
                  <p className='text-sm md:text-md text-black font-medium tracking-wide my-4 md:my-6'>Step 2: <span className='text-sm md:text-md text-gray-500'>Apply evenly to your face.</span></p>
                  <p className='text-sm md:text-md text-black font-medium tracking-wide my-4 md:my-6'>Step 3: <span className='text-sm md:text-md text-gray-500'>Wash your hands.</span></p>
                </div>
              )}
            </div>
            <div className='mt-6 md:mt-10'>
              <button
                onClick={() => {
                  addtoCart(product);
                }}
                className='bg-black font-sans text-white px-4  py-2 rounded-md w-[95%] md:w-[100%] h-14 md:h-16 font-semibold text-sm md:text-md nav-link-curly'>Add to Cart — ₹895</button>
              <p className='mt-4 text-sm md:text-base'> <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="mr-3 inline"><path d="M1 3.61768L5.43176 8.04944L12.7424 0.738892" stroke="currentColor" strokeWidth="2"></path></svg> <span className='tracking-wide'>Ordered before 10pm, shipped today.</span></p>
              <p className='mt-2 text-sm md:text-base'> <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="mr-3 inline"><path d="M1 3.61768L5.43176 8.04944L12.7424 0.738892" stroke="currentColor" strokeWidth="2"></path></svg> <span className='tracking-wide'>Free shipping from ₹400.</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TanningCream
