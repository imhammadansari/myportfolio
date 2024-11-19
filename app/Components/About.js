"use client";
import 'animate.css';
import React from 'react'
import { useEffect } from 'react';
// import { WOW } from 'wowjs'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const About = () => {
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

      <div id="about" className='w-full flex lg:mt-20 xl:mt-20 '>
        <div className='w-[20rem] sm:w-[23rem] md:w-[45rem] lg:w-[40rem] xl:w-[40rem] mt-10 mx-4 sm:m-10 lg:mx-20 xl:mx-20'>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold' data-aos="fade-down">
            About <span className='text-sky-600'>Me</span>
          </h1>
          <h1 className='text-sky-600 mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded' data-aos="fade-right">
            ____
          </h1>
          <p className='text-xs sm:text-base md:text-lg lg:text-lg xl:text-lg sm:mt-2 lg:mt-3 xl:mt-3' data-aos="fade-down">
            I am a MERN stack developer specializing in front-end development. I create responsive, user-friendly websites with intuitive and visually appealing interfaces. Passionate about continuous learning, I stay updated on the latest tools and techniques to enhance the web experience.
          </p>
          <a href="./CV-Hammad Ansari.pdf" download><button data-aos="fade-up" className='w-16 h-8 md:font-bold lg:font-bold xl:font-bold text-xs mt-4 sm:w-20 sm:h-8 sm:text-sm md:w-24 md:h-9 md:text-base lg:w-28 lg:h-10 lg:text-lg xl:w-28 xl:h-10 xl:text-lg rounded hover:bg-white hover:text-sky-600 text-white bg-sky-600'>
            My CV
          </button></a>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} data-aos="fade-up" className='w-16 h-8 ml-5 md:font-bold lg:font-bold xl:font-bold text-xs mt-4 sm:w-20 sm:h-8 sm:text-sm md:w-24 md:h-9 md:text-base lg:w-28 lg:h-10 lg:text-lg xl:w-28 xl:h-10 xl:text-lg rounded hover:bg-white hover:text-sky-600 text-white bg-sky-600'>
            Hire Me
          </button>
        </div>
        <div data-aos="zoom-in" className='w-[12.5rem] sm:w-[14rem] sm:ml-20 md:w-[30rem] lg:w-[25rem] xl:w-[30rem] flex items-center md:justify-center lg:justify-center xl:justify-center mt-8 sm:mt-0 lg:mt-0'>
          <img className='' src='./about.png' alt="About Me" />
        </div>
      </div>
    </>
  );
}


export default About;
