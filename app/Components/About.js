"use client";
import 'animate.css';
import React from 'react'
import { useEffect } from 'react';
// import { WOW } from 'wowjs'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { useLottie } from "lottie-react";
import AboutAnimation from "../assets/aboutAnimate.json";


const About = () => {

   const options = {
      animationData: AboutAnimation,
      loop: true,
    };
  
    const { View } = useLottie(options);
    
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

      <div id="about" className='w-full bg-black bg-opacity-95 flex py-4 lg:mt-4 xl:mt-4 lg:py-8 xl:py-8 '>
        <div className='w-[24rem] sm:w-[23rem] md:w-[45rem] lg:w-[40rem] xl:w-[40rem] mt-14 ml-4 sm:ml-10 lg:ml-20 xl:ml-20'>
        <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold' data-aos="fade-down">
  About <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Me</span>
</h1>
<h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded' data-aos="fade-right">
  ____
</h1>

          <p className='text-xs text-white sm:text-base md:text-lg lg:text-lg xl:text-lg sm:mt-2 lg:mt-3 xl:mt-3' data-aos="fade-down">
            I am a MERN stack developer specializing in front-end and back-end development. I 
specialize in creating responsive designs that look great on any device, focusing on easy-to-use and 
attractive user interfaces. I am excited to find new opportunities to contribute and grow as a developer. 
          </p>
          <a href="./Resume - Hammad Ansari.pdf" download>
  <button data-aos="fade-up" 
    className='w-16 h-8 md:font-bold lg:font-bold xl:font-bold text-xs mt-4 sm:w-20 sm:h-8 sm:text-sm md:w-24 md:h-9 md:text-base lg:w-28 lg:h-10 lg:text-lg xl:w-28 xl:h-10 xl:text-lg rounded 
    hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed]'>
    My CV
  </button>
</a>

<button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} data-aos="fade-up" 
  className='w-16 h-8 ml-5 md:font-bold lg:font-bold xl:font-bold text-xs mt-4 sm:w-20 sm:h-8 sm:text-sm md:w-24 md:h-9 md:text-base lg:w-28 lg:h-10 lg:text-lg xl:w-28 xl:h-10 xl:text-lg rounded 
  hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
  text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed]'>
  Hire Me
</button>

        </div>
        <div data-aos="zoom-in" className='w-[10rem] sm:w-[14rem] sm:ml-20 md:w-[30rem] lg:w-[25rem] xl:w-[30rem] flex items-center md:justify-center justify-end xl:justify-center mt-8 sm:mt-0 lg:mt-0'>
        <div className="w-[18rem] lg:w-[28rem]">{View}</div>
        </div>
      </div>
    </>
  );
}


export default About;
