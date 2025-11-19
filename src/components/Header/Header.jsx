import React, { useState, useEffect } from 'react'
import raygirl from '../../assets/ray-care1.png'
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { GoArrowRight } from "react-icons/go";
import Home from '../Home/Home';

function Header({ showHero = true }) {
    const [count, setCount] = useState(0)
    const messages = [
        "Order before 10pm, shipped today",
        "Free delivery from ₹400",
        "Free gift from ₹800",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState("slide-in");
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationClass("slide-out");
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % messages.length);
                setAnimationClass("slide-in");
            }, 500);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <header className=" w-full">
            <div className='relative w-full h-screen '>
                {showHero && (
                    <>
                        <div className="absolute top-4 left-0 w-full block md:hidden z-50 ">
                            <div className="flex justify-center">
                                <h5 className={`text-gray-700 font-sans text-sm ${animationClass}`}>
                                    {messages[currentIndex]}
                                </h5>
                            </div>
                        </div>

                        <div className="absolute top-4 left-0 w-full hidden md:flex justify-center gap-10 py-3 z-50">
                            {messages.map((msg, index) => (
                                <h5 key={index} className='text-gray-700 cursor-pointer font-sans '>{msg}</h5>
                            ))}
                        </div>
                        <div className="w-full h-screen ">
                            <img
                                src={raygirl}
                                alt="Ray Girl"
                                className="absolute -top-[5vh] h-[105vh] md:w-full w-[100vw] bg-gray-100 object-center object-cover"
                            />
                        </div>
                    </>
                )}

                <Navbar count={count} className={showHero ? "absolute top-20 left-0" : ""} />
                <div className="absolute right-0 md:top-[29%] left-24 md:left-40 z-10 text-black suncreen   top-40 "  >
                    <p className="text-xl text-gray-800 font-medium w-60">★★★★☆ <span className='text-sm '>14,766 reviews</span></p>
                    <h3 className='md:text-5xl text-3xl md:w-80 w-44 mt-10 font-medium my-4 leading-tight semibold text-center md:text-left'>Protect your skin against the sun.</h3>
                    <div className='md:mt-8 mt-5 '>
                        <NavLink to='/'
                            className='flex items-center text-base w-28  font-medium  nav-link md:ml-0 ml-8'>Shop suncreen <GoArrowRight
                                className='absolute left-28 ' /></NavLink>
                    </div>
                </div>
            </div>
            <Home />
        </header>
    )
}

export default Header
