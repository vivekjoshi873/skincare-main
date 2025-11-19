import React, { useRef, useContext, useState } from 'react';
import Navbar from '../components/Header/Navbar';
import curlyCream from '../assets/curly-cream.webp';
import curlyCreamScroll1 from '../assets/curly-cream2.webp';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { AddCart } from '../context/AddCart';
import { IoAddOutline } from "react-icons/io5";

function CurlyHair() {
  const { addtoCart } = useContext(AddCart);
  const productSliderRef = useRef(null);
  const [isRotated, setIsRotated] = useState(false);
  const [showText, setShowText] = useState(false);

  const product = {
    id: 1,
    name: "Curly Hair Routine",
    price: 1200,
    image: curlyCream,
    description: "An all-inclusive care for defined, frizz-free, and healthy curls",
    quantity: 1
  };

  const slideLeftProduct = () => {
    if (productSliderRef.current) {
      productSliderRef.current.scrollLeft -= 1000;
    }
  };

  const slideRightProduct = () => {
    if (productSliderRef.current) {
      productSliderRef.current.scrollLeft += 1000;
    }
  };

  return (
    <div>
      <Navbar />
      <div className='container mx-auto py-9 px-4'>
        <h5 className='text-sm font-medium text-gray-400 mb-4'>Curly Hair Routine</h5>
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Image slider */}
          <div className='relative lg:max-w-[55%] rounded-md overflow-hidden'>
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
              <div className='min-w-full flex-shrink-0 scroll-snap-align-start flex justify-center items-center bg-zinc-100'>
                <img src={curlyCream} alt="Curly Cream" className='w-full h-[500px] sm:h-[400px] md:h-[500px] object-contain p-10 md:p-0' />
              </div>
              <div className='min-w-full flex-shrink-0 scroll-snap-align-start flex justify-center items-center'>
                <img src={curlyCreamScroll1} alt="Curly Cream 2" className='w-full md:w-[190%] h-[500px] md:h-[120vh] object-cover rounded-md' />
              </div>
            </div>

            <div className='absolute top-1/2 left-2 transform -translate-y-1/2 z-10 hidden md:block'>
              <button onClick={slideLeftProduct} className='bg-white p-2 rounded-full shadow-md'>
                <MdKeyboardArrowLeft size={24} />
              </button>
            </div>
            <div className='absolute top-1/2 right-2 transform -translate-y-1/2 z-10 hidden md:block'>
              <button onClick={slideRightProduct} className='bg-white p-2 rounded-full shadow-md'>
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Product details */}
          <div className='w-full lg:max-w-[35%]'>
            <h1 className='text-xl font-medium nav-link-curly'>★★★★☆ <span className='mx-2 text-sm text-gray-500'>212 reviews</span></h1>
            <p className='text-3xl font-medium mt-4 nav-link-curly'>Curly Hair Routine</p>
            <p className='text-md font-medium mt-4 nav-link-curly'>Includes 3 products</p>
            <hr className='my-4' />
            <div>
              <p className='font-medium nav-link-curly tracking-wide'>An all-inclusive care for defined, frizz-free, and healthy curls.</p>
              <p className='mt-4 font-medium nav-link-curly tracking-wide'>This routine includes the Ray Hair Mask (200ml), the Ray Curl Cream (100ml), and the Ray Anti-Frizz Spray (100ml).</p>
              <hr className='my-8' />
            </div>

            <div>
              <div
                onClick={() => {
                  setIsRotated(!isRotated);
                  setShowText(!showText);
                }}
                className='flex justify-between items-center cursor-pointer'
              >
                <h1 className='text-md font-medium nav-link-curly tracking-wide'>How to use</h1>
                <span className='transition-transform duration-300'>
                  <IoAddOutline className={`${isRotated ? 'rotate-45' : 'rotate-0'} transition-transform duration-300`} size={18} />
                </span>
              </div>
              {showText && (
                <div className='mt-4 text-gray-600 animate-fadeIn'>
                  <p className='text-md text-black font-medium tracking-wide my-6'>In the shower: <span className='text-gray-500'>After washing your hair, apply a generous amount of the Ray Hair Mask to wet hair and leave it on for 3-5 minutes. Rinse thoroughly.</span></p>
                  <p className='text-md text-black font-medium tracking-wide my-6'>After the shower: <span className='text-gray-500'>Apply Ray Curl Cream to towel-dried hair, distribute evenly and shape your curls.</span></p>
                  <p className='text-md text-black font-medium tracking-wide my-6'>Throughout the day: <span className='text-gray-500'>Shake the Ray Anti-Frizz Spray before use and spray evenly onto your hair. Hold the spray 20-30 cm away and use your fingers to distribute and style.</span></p>
                </div>
              )}
            </div>

            <div className='mt-10'>
              <button
                onClick={() => {
                  addtoCart(product);
                  console.log(product);
                }}
                className='bg-black text-white px-4 py-2 rounded-md w-full h-16 font-semibold text-md nav-link-curly'
              >
                Add to Cart — ₹1200
              </button>
              <p className='mt-4'>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="mr-3 inline">
                  <path d="M1 3.61768L5.43176 8.04944L12.7424 0.738892" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className='tracking-wide'>Ordered before 10pm, shipped today.</span>
              </p>
              <p className='mt-2'>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="mr-3 inline">
                  <path d="M1 3.61768L5.43176 8.04944L12.7424 0.738892" stroke="currentColor" strokeWidth="2" />
                </svg>
                <span className='tracking-wide'>Free shipping from ₹400.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurlyHair;
