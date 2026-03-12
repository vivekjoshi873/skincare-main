import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Header/Navbar'
import tanningDrop2 from '../assets/tanning-drops-normal.webp'
import tanningDropHover from '../assets/tanningdrops-girl.avif'
import tanningDrop3 from '../assets/tanningdropsantiaging.webp'
import tanningDrop3Hover from '../assets/dropsantiaging.webp'
import tanningCream from '../assets/tanning-cream.webp'
import tanningCreamHover from '../assets/tanning-cream2.webp'
import acneCream from '../assets/acnecream.webp'
import acneCreamHover from '../assets/acnecream1.webp'
import faceWash from '../assets/facewash.webp'
import faceWashHover from '../assets/Facewash2.webp'
import cicacream from '../assets/cicecream.webp'
import cicacreamHover from '../assets/cicecream1.webp'
import curlyHair from '../assets/curly-cream.webp'
import suncreen from '../assets/suncream.webp'
import suncreamHover from '../assets/suncream2.webp'
import hoverCurlyHair from '../assets/curly-cream2.webp'
import { AddCart } from '../context/AddCart';
import { IoMdAdd } from 'react-icons/io';

function AllProducts() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { addtoCart } = useContext(AddCart);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    addtoCart(product);
  };

  const filterButtons = [
    { id: 'all', label: 'All Products' },
    { id: 'routine', label: 'Tanning' },
    { id: 'facewash', label: 'Face Wash' },
    { id: 'acneprone', label: 'Acne Prone' },
    { id: 'anti-aging', label: 'Anti-Aging' },
    { id: 'moisturizing', label: 'Moisturizing' },
    { id: 'sunscreen', label: 'Sunscreen' },
  ];

  const products = [
    { id: '1', name: 'Curly Hair Routine', price: 1200, image: curlyHair, hoverImage: hoverCurlyHair, quantity: 1, category: 'routine', path: '/curly-hair' },
    { id: '2', name: 'Suncream SPF 50 - 50ml', price: 1140 , image: suncreen, hoverImage: suncreamHover, quantity: 1, category: 'sunscreen', path: '/suncream' },
    { id: '3', name: 'Tanning Cream', price: 895, image: tanningCream, hoverImage: tanningCreamHover, quantity: 1, category: 'routine', path: '/tanning-cream' },
    { id: '4', name: 'Acne Prone Skin Cream', price: 1350 , image: acneCream, hoverImage: acneCreamHover, quantity: 1, category: 'acneprone', path: '/acnecream' },
    { id: '5', name: 'Cica Cream', price: 1250 , image: cicacream, hoverImage: cicacreamHover, quantity: 1, category: 'moisturizing', path: '/cicacream' },
    { id: '6', name: 'Face Wash', price: 750, image: faceWash, hoverImage: faceWashHover, quantity: 1, category: 'facewash', path: '/face-wash' },
    { id: '7', name: 'Tanning Duo', price: 2450, image: tanningCream, hoverImage: tanningCreamHover, quantity: 1, category: 'routine' },
    { id: '8', name: 'Tanning Routine', price: 3100, image: tanningDrop2, hoverImage: tanningDropHover, quantity: 1, category: 'routine' },
    { id: '9', name: 'Anti-aging Tanning Drops', price: 2980, image: tanningDrop3, hoverImage: tanningDrop3Hover, quantity: 1, category: 'anti-aging' },
  ];
  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold m-8">All products</h1>

        <div className="mb-8 px-8">
          <div className="flex gap-4 overflow-x-auto sm:flex-wrap sm:overflow-x-visible no-scrollbar">
            {filterButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => setActiveFilter(button.id)}
                className={`flex-shrink-0 px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === button.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8">
          {filteredProducts.map((product) => (
            <Link to={product.path} key={product.id}>
              <div className="rounded-lg bg-zinc-100 transition-shadow w-full">
                <div className="group w-full relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 p-2 sm:p-4"
                  />
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="w-[140%] h-full object-cover rounded-md absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className='absolute bottom-2 sm:bottom-3 right-2 sm:right-4 bg-black rounded-md text-white p-1.5 sm:p-2 px-2 sm:px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-xs sm:text-sm font-medium'
                  >
                    Add <IoMdAdd />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm sm:text-md font-medium tracking-wide">{product.name} — ₹{product.price}</h3>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  )
}

export default AllProducts
