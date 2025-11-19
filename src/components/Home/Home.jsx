import React, { useRef } from 'react'
import { useContext } from 'react';
import { GoArrowRight } from "react-icons/go";
import { Link, NavLink } from 'react-router-dom'
import curlyHair from '../../assets/curly-cream.webp'
import suncreen from '../../assets/suncream.webp'
import suncreamHover from '../../assets/suncream2.webp'
import hoverCurlyHair from '../../assets/curly-cream2.webp'
import { IoMdAdd } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import tanningCream from '../../assets/tanning-cream.webp'
import tanningCreamHover from '../../assets/tanning-cream2.webp'
import acneCream from '../../assets/acnecream.webp'
import acneCreamHover from '../../assets/acnecream1.webp'
import faceWash from '../../assets/facewash.webp'
import faceWashHover from '../../assets/Facewash2.webp'
import cicacream from '../../assets/cicecream.webp'
import cicacreamHover from '../../assets/cicecream1.webp'
import bg from '../../assets/bg-image.avif'
import facewash from '../../assets/facecream.webp'
import bodyLotion from '../../assets/body-lotion.webp'
import antiFrizz from '../../assets/anti-frizz.webp'
import faceBody from '../../assets/face-body.webp'
import bgResearch from '../../assets/research.avif'
import tanningDrop from '../../assets/tanningdrops.avif'
import tanningDrop2 from '../../assets/tanning-drops-normal.webp'
import tanningDropHover from '../../assets/tanningdrops-girl.avif'
import tanningDrop3 from '../../assets/tanningdropsantiaging.webp'
import tanningDrop3Hover from '../../assets/dropsantiaging.webp'
import rayStore1 from '../../assets/store1.avif'
import rayStore2 from '../../assets/store2.avif'
import rayStore3 from '../../assets/store3.avif'
import rayStore4 from '../../assets/store4.avif'
import { AddCart } from '../../context/AddCart';

function Home() {
  const { addtoCart } = useContext(AddCart);

  const products = [
    { id: '1', name: 'Curly Hair Routine', price: 1200, image: curlyHair, hoverImage: hoverCurlyHair, quantity: 1 },
    { id: '2', name: 'Suncream SPF 50 - 50ml', price: 1140 , image: suncreen, hoverImage: suncreamHover, quantity: 1 },
    { id: '3', name: 'Tanning Cream', price: 895, image: tanningCream, hoverImage: tanningCreamHover, quantity: 1 },
    { id: '4', name: 'Acne Prone Skin Cream', price: 1350 , image: acneCream, hoverImage: acneCreamHover, quantity: 1 },
    { id: '5', name: 'Cica Cream', price: 1250 , image: cicacream, hoverImage: cicacreamHover, quantity: 1 },
    { id: '6', name: 'Face Wash', price: 750, image: faceWash, hoverImage: faceWashHover, quantity: 1 },
    { id: '7', name: 'Tanning Duo', price: 2450, image: tanningCream, hoverImage: tanningCreamHover, quantity: 1 },
    { id: '8', name: 'Tanning Routine', price: 3100, image: tanningDrop2, hoverImage: tanningDropHover, quantity: 1 },
    { id: '9', name: 'Anti-aging Tanning Drops', price: 2980, image: tanningDrop3, hoverImage: tanningDrop3Hover, quantity: 1 },
  ];
  const productSliderRef = useRef(null);
  const reviewSliderRef = useRef(null);

  function slideLeftProduct() {
    if (productSliderRef.current) {
      productSliderRef.current.scrollLeft -= 500;
    }
  }

  function slideRightProduct() {
    if (productSliderRef.current) {
      productSliderRef.current.scrollLeft += 500;
    }
  }

  function slideLeftReview() {
    if (reviewSliderRef.current) {
      reviewSliderRef.current.scrollLeft -= 500;
    }
  }

  function slideRightReview() {
    if (reviewSliderRef.current) {
      reviewSliderRef.current.scrollLeft += 500;
    }
  }
  const handleAddToCart = (product) => {
    addtoCart(product);
  };
  return (
    <>
      <div className='w-full overflow-x-hidden'>
        <div className='overflow-x-hidden'>
          <div className='w-full '>
            <div className=''>
              <h1 className='md:text-5xl text-3xl m-9 md:m-12 w-[50%]'>Together for healthy skin</h1>
              <div className='flex justify-between items-center mt-10'>
                <span className='md:m-12 hidden md:block'>Popular products</span>
                <NavLink to='/allproduct' className={({ isActive }) =>
                  ` items-center gap-1 font-medium mx-3 hidden md:flex`
                }>
                  View all products <GoArrowRight />
                </NavLink>
              </div>
              <div className='relative w-full overflow-hidden'>
                <div className='absolute top-1/2 left-4 transform -translate-y-1/2 z-10 md:block hidden'>
                  <button onClick={slideLeftProduct} className='bg-white p-2 rounded-full shadow-md'>
                    <MdKeyboardArrowLeft size={24} />
                  </button>
                </div>
                <div className='absolute top-1/2 right-4 transform -translate-y-1/2 z-10 md:block hidden'>
                  <button onClick={slideRightProduct} className='bg-white p-2 rounded-full shadow-md'>
                    <MdKeyboardArrowRight size={24} />
                  </button>
                </div>
                <div ref={productSliderRef} className='flex transition-transform duration-300 ease-in-out gap-4 overflow-x-auto md:overflow-x-hidden scroll-smooth w-full snap-x snap-mandatory'>
                  <div className='min-w-[calc(100%-32px)] md:min-w-[calc(25%-16px)] flex-shrink-0 bg-zinc-100 cursor-pointer group snap-center'>
                    <Link to="/curly-hair" className="relative block">
                      <img
                        src={curlyHair}
                        alt="Curly hair cream"
                        className="w-full h-96 object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 px-12 ease-in-out"
                      />
                      <img
                        src={hoverCurlyHair}
                        alt="Curly hair cream hover"
                        className="w-full h-[400px] object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out bg-white"
                      />
                    </Link>
                    <div className='text-base relative group'>
                      <h5 className='bg-white tracking-widest font-medium text-sm'> Curly Hair Routine  <br />— ₹1200</h5>
                      <button
                        onClick={() => handleAddToCart(products[0])}
                        className='absolute -top-12 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                        Add <IoMdAdd />
                      </button>
                    </div>
                  </div>
                  <div className='min-w-[calc(100%-32px)] md:min-w-[calc(25%-16px)] flex-shrink-0 bg-zinc-100 cursor-pointer group snap-center'>
                    <Link to="/suncream" className="relative block">
                      <img
                        src={suncreen}
                        alt="Curly hair cream"
                        className="w-full h-96 object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 px-12 ease-in-out"
                      />
                      <img
                        src={suncreamHover}
                        alt="Curly hair cream hover"
                        className="w-full h-[400px] object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out bg-white"
                      />
                    </Link>
                    <div className='text-base relative group'>
                      <h5 className='bg-white tracking-widest font-medium text-sm '> Suncream  <br />SPF 50 - 50ml  — ₹1140 </h5>
                      <button
                        onClick={() => handleAddToCart(products[1])}
                        className='absolute -top-12 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                        Add <IoMdAdd />
                      </button>
                    </div>
                  </div>
                  <div className='min-w-[calc(100%-32px)] md:min-w-[calc(25%-16px)] flex-shrink-0 bg-zinc-100 cursor-pointer group snap-center'>
                    <Link to="/tanning-cream" className="relative block">
                      <img
                        src={tanningCream}
                        alt="Curly hair cream"
                        className="w-full h-96 object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 px-12 ease-in-out"
                      />
                      <img
                        src={tanningCreamHover}
                        alt="Curly hair cream hover"
                        className="w-full h-[400px] object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out bg-white"
                      />
                    </Link>
                    <div className='text-base relative group'>
                      <h5 className='bg-white tracking-widest font-medium text-sm'> Tanning Cream <br /> — ₹895</h5>
                      <button
                        onClick={() => handleAddToCart(products[2])}
                        className='absolute -top-14 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                        Add <IoMdAdd />
                      </button>
                    </div>
                  </div>
                  <div className='min-w-[calc(100%-32px)] md:min-w-[calc(25%-16px)] flex-shrink-0 bg-zinc-100 cursor-pointer group snap-center'>
                    <Link to="/acnecream" className="relative block">
                      <img
                        src={acneCream}
                        alt="Curly hair cream"
                        className="w-full h-96 object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 px-12 ease-in-out"
                      />
                      <img
                        src={acneCreamHover}
                        alt="Curly hair cream hover"
                        className="w-full h-[400px] object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out bg-white"
                      />
                    </Link>
                    <div className='text-base relative group'>
                      <h5 className='bg-white tracking-widest font-medium text-sm'> Acne Prone Skin Cream <br />  — ₹1350 </h5>
                      <button
                        onClick={() => handleAddToCart(products[3])}
                        className='absolute -top-14 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                        Add <IoMdAdd />
                      </button>
                    </div>
                  </div>
                  <div className='w-[70%] md:w-1/4 flex-shrink-0 ... bg-zinc-100 cursor-pointer group snap-center'>
                    <Link to="/cicacream" className="relative block">
                      <img
                        src={cicacream}
                        alt="Curly hair cream"
                        className="w-full h-96 object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 md:px-12 ease-in-out"
                      />
                      <img
                        src={cicacreamHover}
                        alt="Curly hair cream hover"
                        className="w-full h-[400px] object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out bg-white"
                      />
                    </Link>
                    <div className='text-base relative group'>
                      <h5 className='bg-white tracking-widest font-medium text-sm'> Cica Cream <br />— ₹1250 </h5>
                      <button
                        onClick={() => handleAddToCart(products[4])}
                        className='absolute -top-14 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                        Add <IoMdAdd />
                      </button>
                    </div>
                  </div>
                  <div className='w-[70%] md:w-1/4 flex-shrink-0 ... bg-zinc-100 cursor-pointer group snap-center'>
                    <Link to="/face-wash" className="relative block">
                      <img
                        src={faceWash}
                        alt="Curly hair cream"
                        className="w-full h-96 object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 px-12 ease-in-out"
                      />
                      <img
                        src={faceWashHover}
                        alt="Curly hair cream hover"
                        className="w-full h-[400px] object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out bg-white"
                      />
                    </Link>
                    <div className='text-base relative group'>
                      <h5 className='bg-white tracking-widest font-medium text-sm'> Face Wash<br />  — ₹750 </h5>
                      <button
                        onClick={() => handleAddToCart(products[5])}
                        className='absolute -top-14 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                        Add <IoMdAdd />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="my-12  ">
        <h1 className='text-3xl md:text-5xl w-[79%] md:w-[65%] mx-6 md:max-w-[65%] font-medium'>Ray products are developed by pharmacist Hilde Nys. They contain only ingredients of natural origin with scientifically proven effects.
        </h1>
        <div className='flex gap-8 py-20'>
          <div className="w-{70%} sticky top-20 h-[100%] md:block hidden">
            <img src={bg} className="w-full h-full object-cover  shadow-md" />
          </div>
          <div className=" md:w-[40%] grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-6 md:m-6 m-2">
            <div className="bg-white cursor-pointer">
              <div className='bg-zinc-100 h-[300px] md:h-[420px] '>
                <div className="mx-5 my-6 py-4">
                  <h4 className='font-semibold'>Face</h4>
                  <span className='text-gray-500'>32 products</span>
                </div>
                <li>
                  <Link to='/' className='w-full h-full'>
                    <img
                      src={facewash}
                      alt="face Wash"
                      className='w-full h-full px-8  md:px-14'
                    />
                  </Link>
                </li>
              </div>
            </div>
            <div className="bg-white rounded-xl">
              <div className="bg-white cursor-pointer">
                <div className='bg-zinc-100 h-[300px] md:h-[420px]'>
                  <div className="mx-5 my-6 py-4">
                    <h4 className='font-semibold'>Body</h4>
                    <span className='text-gray-500'>20 products</span>
                  </div>
                  <li className='h-[300px] md:h-[420px] p-6'>
                    <Link to='/' className='w-full h-full'>
                      <img
                        src={bodyLotion}
                        alt="body lotion"
                        className='px-4 object-cover object-center md:px-14'
                      />
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl">
              <div className="bg-white cursor-pointer">
                <div className='bg-zinc-100 h-[300px] md:h-[420px]'>
                  <div className="mx-5 my-6 py-4">
                    <h4 className='font-semibold'>Hair</h4>
                    <span className='text-gray-500'>8 products</span>
                  </div>
                  <li>
                    <Link to='/' className='w-full h-full'>
                      <img
                        src={antiFrizz}
                        alt="anti frizz"
                        className='px-8 object-cover object-center md:px-14'
                      />
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl">
              <div className="bg-white cursor-pointer">
                <div className='bg-zinc-100 h-[300px] md:h-[420px]'>
                  <div className="mx-5 my-6 py-4">
                    <h4 className='font-semibold'>Hair</h4>
                    <span className='text-gray-500'>8 products</span>
                  </div>
                  <li>
                    <Link to='/' className='w-full h-full'>
                      <img
                        src={faceBody}
                        alt="face body"
                        className='px-8 object-cover object-center md:px-12'
                      />
                    </Link>
                  </li>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl col-span-2 md:col-span-1 w-[200px] md:w-full">
              <div className="bg-white cursor-pointer">
                <div className='bg-zinc-100 h-[300px] md:h-[420px]'>
                  <div className="mx-5 my-6 py-4 leading-tight">
                    <h1 className='md:text-2xl text-xl font-semibold font-sans md:w-[80%]'>Results that speak for themselves, with pharmaceutical reliability.</h1>
                  </div>
                  <li className='h-[300px] flex items-end pb-6 md:pb-0'>
                    <Link to='/' className='w-full flex justify-start pl-7'>
                      <Link to='/' className='font-semibold  items-center justify-center p-8 font-sans md:mb-12 hidden md:flex'>Shop here <GoArrowRight className='ml-1' />
                      </Link>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='max-w-full'>
        <div className="flex flex-col md:flex-row">
          <div className='w-full md:w-1/2 h-[500px] md:h-[750px] m-[7px] md:m-4 order-1 md:order-2 '>
            <img
              src={bgResearch}
              alt="Research background"
              className='w-full h-full object-cover' />
          </div>
          <div className="w-full md:w-1/2 p-6 order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-medium mb-5 w-full md:w-[80%] leading-tight">Each ingredient is analyzed separately for potential endocrine-disrupting, carcinogenic, irritating, and pigment-altering health risks.</h1>
            <li className="list-none mt-4">
              <Link to='/allproduct'
                className='flex items-center font-medium my-10 text-lg md:text-xl'>
                Show all products <GoArrowRight className="ml-1" /></Link>
            </li>
          </div>
        </div>
      </div>
      <div className='m-8 '>
        <h1 className='text-4xl mt-12'>Complete routines for a subtle tan.</h1>
        <div className='flex gap-8 py-20'>
          <div className="w-[80%] sticky top-20 h-[100%] hidden md:block">
            <img src={tanningDrop} className="w-full h-full object-cover shadow-md" />
          </div>
          <div className="w-full md:w-[40%] flex flex-col gap-8">
            <div className="w-full md:w-[90%] h-[500px] flex-shrink-0 bg-zinc-100 cursor-pointer group">
              <Link to="/tanning-products" className="relative block h-full">
                <img
                  src={tanningCream}
                  alt="Tanning cream"
                  className="w-full h-full object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 px-12 ease-in-out p-14 md:p-4"
                />
                <img
                  src={tanningCreamHover}
                  alt="Tanning cream hover"
                  className="w-full h-full object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out"
                />
              </Link>
              <div className='text-base relative group'>
                <h5 className='bg-white tracking-widest font-medium text-sm'>Tanning Duo — ₹2450</h5>
                <button className='absolute -top-12 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                  Add <IoMdAdd />
                </button>
              </div>
            </div>
            <div className="w-full md:w-[90%] h-[500px] flex-shrink-0 bg-zinc-100 cursor-pointer group mt-6">
              <Link to="/" className="relative block h-full">
                <img
                  src={tanningDrop2}
                  alt="Tanning drops"
                  className="w-full h-full object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 px-12 ease-in-out p-14 md:p-4"
                />
                <img
                  src={tanningDropHover}
                  alt="Tanning drops hover"
                  className="w-full h-full object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out"
                />
              </Link>
              <div className='text-base relative group'>
                <h5 className='bg-white tracking-widest font-medium text-sm'>Tanning Routine— ₹3100</h5>
                <button className='absolute -top-12 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                  Add <IoMdAdd />
                </button>
              </div>
            </div>
            <div className="w-full md:w-[90%] h-[500px] flex-shrink-0 bg-zinc-100 cursor-pointer group mt-6">
              <Link to="/tanning-products" className="relative block h-full">
                <img
                  src={tanningDrop3}
                  alt="Anti-aging tanning drops"
                  className="w-full h-full object-cover object-center transition-opacity duration-700 absolute inset-0 group-hover:opacity-0 px-12 ease-in-out p-14 md:p-4"
                />
                <img
                  src={tanningDrop3Hover}
                  alt="Anti-aging tanning drops hover"
                  className="w-full h-full object-cover object-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 ease-in-out"
                />
              </Link>
              <div className='text-base relative group'>
                <h5 className='bg-white tracking-widest font-medium text-sm'>Anti-aging Tanning Drops —₹2980</h5>
                <button className='absolute -top-12 right-2 bg-black text-white p-2 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-sm font-medium'>
                  Add <IoMdAdd />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-8 py-10 justify-between bg-zinc-100'>
        <h5 className='text-base m-4 text-gray-800'>4 reviews</h5>
        <li className='m-4'>
          <Link className='text-Base font-medium flex items-center gap-1'>
            View all reviews <GoArrowRight className='ml-1' />
          </Link>
        </li>
      </div>
      <div className='relative w-full overflow-hidden bg-zinc-100 pb-10'>
        <div className='absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
          <button onClick={slideLeftReview} className='bg-white p-2 rounded-full shadow-md md:block hidden'>
            <MdKeyboardArrowLeft className='' size={24} />
          </button>
        </div>
        <div className='absolute top-1/2 right-4 transform -translate-y-1/2 z-10'>
          <button onClick={slideRightReview} className='bg-white p-2 rounded-full shadow-md md:block hidden'>
            <MdKeyboardArrowRight size={24} />
          </button>
        </div>
        <div
          ref={reviewSliderRef}
          className="flex transition-transform duration-300 ease-in-out gap-4 overflow-x-auto scroll-smooth w-full sm:overflow-x-hidden"
        >
          <div className="min-w-[90%] sm:min-w-[45%] flex-shrink-0 bg-white h-96 flex flex-col gap-4 sm:ml-10 w-[20%]">
            <div className="flex gap-4 m-5 h-full ">
              <div className="hidden sm:block w-[250px] bg-zinc-100 h-[300px]">
                <img src={acneCream} alt="" className="w-full h-full object-cover p-4" />
              </div>
              <div className="flex-1 relative w-full sm:w-[350px]">
                <h1 className="text-[16px] sm:text-[28px] font-semibold font-sans max-w-full sm:max-w-[350px] ">
                  Very satisfied with it. I dare to go out on the street more confidently without makeup.
                </h1>
                <div className="absolute bottom-0">
                  <p className="text-lg font-extralightbold">★★★★★</p>
                  <p className="text-lg font-medium">Ellen</p>
                  <span className="text-base font-medium text-gray-400">Acne Prone Skin Routine</span>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-[90%] sm:min-w-[45%] flex-shrink-0 bg-white h-96 flex flex-col gap-4 sm:ml-10 w-[20%]" >
            <div className="flex gap-4 m-5 h-full">
              <div className="hidden sm:block w-[250px] bg-zinc-100 h-[300px]">
                <img src={suncreen} alt="" className="w-full h-full object-cover p-4" />
              </div>
              <div className="flex-1 relative w-full sm:w-[350px]">
                <h1 className="text-[16px] sm:text-[28px] font-semibold font-sans max-w-full sm:max-w-[350px] ">
                  The best sunscreen I've ever used! Lightweight and doesn't leave a white cast.
                </h1>
                <div className="absolute bottom-0">
                  <p className="text-lg font-extralightbold">★★★★★</p>
                  <p className="text-lg font-medium">Sarah</p>
                  <span className="text-base font-medium text-gray-400">Suncream SPF 50</span>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-[80%] sm:min-w-[45%] flex-shrink-0 bg-white h-96 flex flex-col gap-4 sm:ml-10 w-[20%]">
            <div className="flex gap-4 m-5 h-full">
              <div className="hidden sm:block w-[250px] bg-zinc-100 h-[300px]">
                <img src={tanningCream} alt="" className="w-full h-full object-cover p-4" />
              </div>
              <div className="flex-1 relative w-full sm:w-[350px]">
                <h1 className="text-[16px] sm:text-[28px] font-semibold font-sans max-w-full sm:max-w-[350px]">
                  Natural looking tan without any streaks. Highly recommend!
                </h1>
                <div className="absolute bottom-0">
                  <p className="text-lg font-extralightbold">★★★★★</p>
                  <p className="text-lg font-medium">Emma</p>
                  <span className="text-base font-medium text-gray-400">Tanning Cream</span>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-[90%] sm:min-w-[45%] flex-shrink-0 bg-white h-96 flex flex-col gap-4 sm:ml-10 w-[20%]">
            <div className="flex gap-4 m-5 h-full">
              <div className="hidden sm:block w-[250px] bg-zinc-100 h-[300px]">
                <img src={cicacream} alt="" className="w-full h-full object-cover p-4" />
              </div>
              <div className="flex-1 relative w-full sm:w-[350px]">
                <h1 className="text-[16px] sm:text-[28px] font-semibold font-sans max-w-full sm:max-w-[350px]">
                  Amazing for sensitive skin. Reduced my redness significantly.
                </h1>
                <div className="absolute bottom-0">
                  <p className="text-lg font-extralightbold">★★★★★</p>
                  <p className="text-lg font-medium">Lisa</p>
                  <span className="text-base font-medium text-gray-400">Cica Cream</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-8 mt-20">
        <h3 className="text-base font-medium tracking-wide m-2">Ray stores (4)</h3>

        <div className="flex sm:flex-wrap gap-4 w-full overflow-x-auto scroll-smooth sm:overflow-x-hidden mt-5">
          <div className="min-w-[100%] h-[500px] md:h-[550px] md:w-[350px] flex-shrink-0 sm:min-w-0 sm:h-auto">
            <img
              src={rayStore1}
              alt=""
              className="w-full h-[75%] object-cover"
            />
            <h3 className="font-semibold font-sans tracking-wide">Ray Ghent</h3>
            <p className="text-gray-500 tracking-wide">Veldstraat 62, Ghent</p>
          </div>

          <div className="min-w-[100%] h-[500px] md:h-[550px] md:w-[350px] flex-shrink-0 sm:min-w-0 sm:h-auto">
            <img
              src={rayStore2}
              alt=""
              className="w-full h-[75%] object-cover"
            />
            <h3 className="font-semibold font-sans tracking-wide">Ray Bruges</h3>
            <p className="text-gray-500 tracking-wide">Zuidzandstraat 4, Brugge</p>
          </div>

          <div className="min-w-[100%] h-[500px] md:h-[550px] md:w-[350px] flex-shrink-0 sm:min-w-0 sm:h-auto">
            <img
              src={rayStore3}
              alt=""
              className="w-full h-[75%] object-cover"
            />
            <h3 className="font-semibold font-sans tracking-wide">Ray Leuven</h3>
            <p className="text-gray-500 tracking-wide">Mechelsestraat 31, Leuven</p>
          </div>

          <div className="min-w-[100%] h-[500px] md:h-[550px] md:w-[350px] flex-shrink-0 sm:min-w-0 sm:h-auto">
            <img
              src={rayStore4}
              alt=""
              className="w-full h-[75%] object-cover"
            />
            <h3 className="font-semibold font-sans tracking-wide">Ray Antwerp</h3>
            <p className="text-gray-500 tracking-wide">Wiegstraat 36, Antwerp</p>
          </div>
        </div>
      </div>

      <hr className="my-20 border-gray-200" />
    </>
  )
}

export default Home

