import React, { useState, useRef, useContext } from 'react';
import Navbar from '../components/Header/Navbar';
import faceWash from '../assets/facewash.webp';
import faceWashScroll1 from '../assets/facewash3.webp';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { IoAddOutline } from 'react-icons/io5';
import { AddCart } from '../context/AddCart';

function FaceWash() {
  const { addtoCart } = useContext(AddCart);
  const productSliderRef = useRef(null);
  const [isRotated, setIsRotated] = useState(false);
  const [showText, setShowText] = useState(false);

  const product = {
    id: 6,
    name: "Face Wash",
    price:  750,
    image: faceWash,
    description: "Face Wash",
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
        <h5 className='text-sm font-medium text-gray-400 mb-4'>Face Wash</h5>
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Image Slider */}
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
                <img src={faceWash} alt="Face Wash" className='w-full h-[500px] object-contain p-10 md:p-0' />
              </div>
              <div className='min-w-full flex-shrink-0 scroll-snap-align-start flex justify-center items-center'>
                <img src={faceWashScroll1} alt="Face Wash 2" className='w-full md:w-[190%] h-[500px] md:h-[120vh] object-cover rounded-md' />
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

          {/* Product Details */}
          <div className='w-full lg:max-w-[35%]'>
            <h1 className='text-xl font-medium nav-link-curly'>★★★★★ <span className='mx-2 text-sm text-gray-500'>212 reviews</span></h1>
            <p className='text-3xl font-medium mt-4 nav-link-curly'>Face Wash</p>
            <p className='text-md font-medium mt-4 nav-link-curly'>250ml</p>
            <hr className='my-4' />
            <div>
              <p className='font-medium nav-link-curly tracking-wide'>
                Gentle cleanser with a gel-like texture to effectively remove dirt, sweat, and sunscreen from the face.
              </p>
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
                  <p className='text-md text-black font-medium tracking-wide my-4'>
                    Apply the face wash in the morning and evening to your wet face for a gentle cleanse. The gel texture turns into a light foam during cleansing. Rinse thoroughly afterwards.
                  </p>
                  <p className='text-md text-black font-medium tracking-wide my-4'>
                    Tip: For optimal double cleansing, use this cleanser after the Ray Face Cleansing Oil.
                  </p>
                  <p className='text-md text-black font-medium tracking-wide my-4'>
                    Are you recycling with us? The bottle and the pump can easily be recycled separately with PMD.
                  </p>
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
                Add to Cart —  ₹750
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
                <span className='tracking-wide'>Free shipping from  ₹400.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaceWash;
