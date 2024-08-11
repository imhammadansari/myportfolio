"use client";
import 'animate.css';
import React from 'react'
import { useEffect } from 'react';
// import { WOW } from 'wowjs'; 

const About = () => {
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
    
      <div id="about" className='w-full flex lg:mt-20 xl:mt-20 '>
        <div className='w-[20rem] sm:w-[23rem] md:w-[45rem] lg:w-[40rem] xl:w-[40rem] mt-10 mx-4 sm:m-10 lg:mx-20 xl:mx-20'>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold wow animate__animated animate__backInLeft'>
            About <span className='text-sky-600'>Me</span>
          </h1>
          <h1 className='wow animate__animated animate__backInLeft text-sky-600 mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
            ____
          </h1>
          <p className='wow animate__animated animate__backInLeft text-xs sm:text-base md:text-lg lg:text-lg xl:text-lg sm:mt-2 lg:mt-3 xl:mt-3'>
            I'm a front-end developer passionate about crafting engaging and user-friendly websites.
            I specialize in creating responsive designs that look great on any device. My focus is on
            building intuitive and visually appealing user interfaces, continually learning new
            techniques and tools to enhance the web experience.
          </p>
          <a href="./Hammad-CV.pdf" download><button className='wow animate__animated animate__backInLeft w-16 h-8 md:font-bold lg:font-bold xl:font-bold text-xs mt-4 sm:w-20 sm:h-8 sm:text-sm md:w-24 md:h-9 md:text-base lg:w-28 lg:h-10 lg:text-lg xl:w-28 xl:h-10 xl:text-lg rounded hover:bg-white hover:text-sky-600 text-white bg-sky-600'>
            My CV
          </button></a>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className='wow animate__animated animate__backInLeft w-16 h-8 ml-5 md:font-bold lg:font-bold xl:font-bold text-xs mt-4 sm:w-20 sm:h-8 sm:text-sm md:w-24 md:h-9 md:text-base lg:w-28 lg:h-10 lg:text-lg xl:w-28 xl:h-10 xl:text-lg rounded hover:bg-white hover:text-sky-600 text-white bg-sky-600'>
            Hire Me
          </button>
        </div>
        <div className='wow animate__animated animate__backInRight w-[12.5rem] sm:w-[14rem] sm:ml-20 md:w-[30rem] lg:w-[25rem] xl:w-[30rem] flex items-center md:justify-center lg:justify-center xl:justify-center mt-8 sm:mt-0 lg:mt-0'>
          <img className='' src='./about.png' alt="About Me" />
        </div>
      </div>
    </>
  );
}


export default About;
