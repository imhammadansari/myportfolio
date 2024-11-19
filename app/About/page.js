"use client";
import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Footer from '../Components/Footer'
import 'animate.css';
import { useEffect } from 'react';
// import { WOW } from 'wowjs'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Social from '../Components/Social';
// ..

const page = () => {
  useEffect(() => {
    AOS.init({

    });
    // const WOW = require('wowjs').WOW;
    // const wow = new WOW({
    //     offset: 100,
    //     mobile: true,
    //     live: true
    // });
    // wow.init();
}, []);

  return (
    <>
    <Header />
    
      <div id="about" className='w-full h-screen flex lg:mt-20 xl:mt-20 '>
        <div className='w-[20rem] sm:w-[23rem] md:w-[45rem] lg:w-[40rem] xl:w-[40rem] mt-10 mx-4 sm:m-10 lg:mx-20 xl:mx-20'>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold' data-aos="fade-down">
            About <span className='text-sky-600'>Me</span>
          </h1>
          <h1 className='text-sky-600 mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded' data-aos="fade-right">
            ____
          </h1>
          <p className='text-xs sm:text-base md:text-lg lg:text-lg xl:text-lg sm:mt-2 lg:mt-3 xl:mt-3' data-aos="fade-down">
            I'm a front-end developer passionate about crafting engaging and user-friendly websites.
            I specialize in creating responsive designs that look great on any device. My focus is on
            building intuitive and visually appealing user interfaces, continually learning new
            techniques and tools to enhance the web experience.
          </p>
          <a href="./CV-Hammad.pdf" download><button data-aos="fade-up" className='w-16 h-8 md:font-bold lg:font-bold xl:font-bold text-xs mt-4 sm:w-20 sm:h-8 sm:text-sm md:w-24 md:h-9 md:text-base lg:w-28 lg:h-10 lg:text-lg xl:w-28 xl:h-10 xl:text-lg rounded hover:bg-white hover:text-sky-600 text-white bg-sky-600'>
            My CV
          </button></a>
          <button data-aos="fade-up" className='w-16 h-8 ml-5 md:font-bold lg:font-bold xl:font-bold text-xs mt-4 sm:w-20 sm:h-8 sm:text-sm md:w-24 md:h-9 md:text-base lg:w-28 lg:h-10 lg:text-lg xl:w-28 xl:h-10 xl:text-lg rounded hover:bg-white hover:text-sky-600 text-white bg-sky-600'>
            <a href='./Contact'>Hire Me </a>
          </button>
        </div>
        <div data-aos="zoom-in" className='w-[12.5rem] h-[14rem] lg:h-[22rem] xl:[22rem] sm:w-[14rem] sm:ml-20 md:w-[30rem] lg:w-[25rem] xl:w-[30rem] flex items-center md:justify-center lg:justify-center xl:justify-center mt-8 sm:mt-0 lg:mt-0'>
          <img className='' src='./about.png' alt="About Me" />
        </div>
      </div>

      <div className='w-full bg-opacity-95 mt-16' style={{ backgroundColor: '#06090b' }}>

<div className='w-full h-10 lg:h-10 bg-sky-600 flex items-center text-white'>
  <h1 className='m-4 sm:m-9 md:m-9 lg:m-10 text-xs md:text-sm lg:text-lg flex-grow'>Get Connected with me on Social Networks</h1>
  <Social />
</div>

<div className='h-12 text-white flex justify-center items-center text-center'>
  <h1 className='text-xs lg:text-sm xl:text-sm '>©Copyright-2024 - Created by Hammad Ansari</h1>
</div>

</div>
    </>
  )
}

export default page