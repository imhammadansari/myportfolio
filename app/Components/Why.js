"use client"
import React, { useEffect } from 'react';
import 'animate.css';
// import { WOW } from 'wowjs'; 


const Why = () => {
  useEffect(() => {
    const WOW = require('wowjs').WOW;
    const wow = new WOW({
        offset: 100,
        mobile: true,
        live: true
    });
    wow.init();
}, []);

  return (
    <>
      <div className='w-full'>
        <div className='relative mx-auto mt-12 lg:mt-16 xl:mt-16 grid wow animate__animated animate__zoomIn'>
          <img className='w-full h-96 bg-center bg-cover ' src='./black.jpg' alt='Background' />

          <div className='absolute w-full h-full flex flex-col lg:flex-row xl:flex-row gap-0 md:gap-2 lg:gap-4 xl:gap-4 p-3 items-center justify-center'>

            <div className='bg-white p-1 lg:p-5 xl:p-5 text-center bg-opacity-90 mt-0 lg:mt-6 xl:mt-6 wow animate__animated animate__backInLeft transition-transform duration-300 hover:scale-90'>
              <img className='w-[2.5rem] lg:w-14 xl:w-14 mx-auto' src='./24-hours.png' alt='24/7 Support' />
              <h3 className='text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold mt-1'>24/7 Support</h3>
              <p className='text-xs sm:text-xs md:text-sm lg:text-base '>I offer 24/7 support, providing prompt assistance and peace of mind to clients at any time.</p>
            </div>

            <div className='bg-white wow animate__animated animate__backInUp p-1 lg:p-5 xl:p-5 text-center bg-opacity-90 mt-4 lg:mt-6 xl:mt-6 transition-transform duration-300 hover:scale-90'>
              <img className='w-[2.5rem] lg:w-14 xl:w-14 mx-auto' src='./fast.png' alt='24/7 Support' />
              <h3 className='text-sm sm:text-sm md:text-base lg:text-lg xl-text-lg font-bold mt-1'>Fast & Reliable</h3>
              <p className='text-xs sm:text-xs md:text-sm lg:text-base'>I offer fast support, providing prompt assistance and peace of mind to clients at any time.</p>
            </div>

            <div className='bg-white wow animate__animated animate__backInRight p-1 lg:p-5 xl:p-5 text-center bg-opacity-90 mt-4 lg:mt-6 xl:mt-6 transition-transform duration-300 hover:scale-90'>
              <img className='w-[2.5rem] lg:w-14 xl:w-14 mx-auto' src='./flexibility.png' alt='24/7 Support' />
              <h3 className='text-sm sm:text-sm md:text-base lg:text-lg xl-text-lg font-bold mt-1'>Flexible</h3>
              <p className='text-xs sm:text-xs md:text-sm lg:text-base'>I offer flexible support, providing prompt assistance and peace of mind to clients at any time.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Why
