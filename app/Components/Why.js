"use client";
import React, { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Why = () => {
  useEffect(() => {
    AOS.init({
      offset: 20,
      duration: 1000,
      mirror: true,
      once: true, // Animations trigger only once
    });
  }, []);

  return (
    <>
      <div className='w-full bg-black bg-opacity-95'>
        <div className='text-center mt-2 lg:mt-4 xl:mt-4 pt-4 lg:pt-8 xl:pt-8'>
          <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
            Why <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Me</span>
          </h1>
          <h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
            ____
          </h1>
        </div>

        <div className='mx-4 first-letter:pt-4 gap-8 lg:pt-8 xl:pt-8 mt-2 lg:mt-4 flex justify-center'>
          <div data-aos="fade-down" className='w-[22rem] text-white p-1 lg:p-5 xl:p-5 text-center mt-4 lg:mt-6 xl:mt-6 transition-transform duration-300 hover:scale-90'>
            <img className='w-[3.5rem] bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-3 rounded-lg lg:w-[5rem] xl:w-[5rem] mx-auto' src='./24-hours.png' alt='24/7 Support' />
            <h3 className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-bold mt-1'>24/7 Support</h3>
            <p className='text-xs hidden md:block'>Available round the clock to assist you with any development needs. Your project gets the attention it deserves, anytime!</p>
          </div>

          <div data-aos="zoom-in" className='w-[22rem] text-white p-1 lg:p-5 xl:p-5 text-center mt-4 lg:mt-6 xl:mt-6 transition-transform duration-300 hover:scale-90'>
            <img className='w-[3.5rem] bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-3 rounded-lg lg:w-[5rem] xl:w-[5rem] mx-auto' src='./fast.png' alt='Fast & Reliable' />
            <h3 className='text-xs sm:text-sm md:text-base lg:text-lg xl-text-lg font-bold mt-1'>Fast & Reliable</h3>
            <p className='text-xs hidden md:block'>Delivering high-performance web solutions with speed and precision. Ensuring efficiency without compromising quality!</p>
          </div>

          <div data-aos="zoom-out" className='w-[22rem] text-white p-1 lg:p-5 xl:p-5 text-center  mt-4 lg:mt-6 xl:mt-6 transition-transform duration-300 hover:scale-90'>
            <img className='w-[3.5rem] bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-3 rounded-lg lg:w-[5rem] xl:w-[5rem] mx-auto' src='./flexibility.png' alt='Flexible' />
            <h3 className='text-xs sm:text-sm md:text-base lg:text-lg xl-text-lg font-bold mt-1'>Flexible</h3>
            <p className='text-xs hidden md:block'>Adapting to your project’s unique requirements with seamless flexibility. From startups to enterprises, I tailor solutions that fit!"</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;