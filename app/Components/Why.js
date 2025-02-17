"use client"
import React, { useEffect } from 'react';
import 'animate.css';
// import { WOW } from 'wowjs';
import Aos from 'aos' 
import 'aos/dist/aos.css';


const Why = () => {
  useEffect(() => {
    Aos.init({
      offset: 20
    });
  }, [])
  

  return (
    <>
      <div className='w-full bg-black bg-opacity-95'>
        <div className='relative mx-auto pt-4 lg:pt-8 xl:pt-8 mt-2 lg:mt-4 grid' data-aos="fade-down">
          <img className='w-full h-96 bg-center bg-cover ' src='./black.jpg' alt='Background' />

          <div className='absolute w-full h-full flex flex-col lg:flex-row xl:flex-row gap-0 md:gap-2 lg:gap-4 xl:gap-4 p-3 items-center justify-center'>

            <div data-aos="fade-down" className='bg-white p-1 lg:p-5 xl:p-5 text-center bg-opacity-90 mt-0 lg:mt-6 xl:mt-6 transition-transform duration-300 hover:scale-90'>
              <img className='w-[2.5rem] lg:w-14 xl:w-14 mx-auto' src='./24-hours.png' alt='24/7 Support' />
              <h3 className='text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold mt-1'>24/7 Support</h3>
              <p className='text-xs sm:text-xs md:text-sm lg:text-base '>I offer 24/7 support, providing prompt assistance and peace of mind to clients at any time.</p>
            </div>

            <div data-aos="zoom-in" className='bg-white p-1 lg:p-5 xl:p-5 text-center bg-opacity-90 mt-4 lg:mt-6 xl:mt-6 transition-transform duration-300 hover:scale-90'>
              <img className='w-[2.5rem] lg:w-14 xl:w-14 mx-auto' src='./fast.png' alt='24/7 Support' />
              <h3 className='text-sm sm:text-sm md:text-base lg:text-lg xl-text-lg font-bold mt-1'>Fast & Reliable</h3>
              <p className='text-xs sm:text-xs md:text-sm lg:text-base'>I offer fast support, providing prompt assistance and peace of mind to clients at any time.</p>
            </div>

            <div data-aos="fade-up" className='bg-white p-1 lg:p-5 xl:p-5 text-center bg-opacity-90 mt-4 lg:mt-6 xl:mt-6 transition-transform duration-300 hover:scale-90'>
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
