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

      <div id="about" className='w-full bg-black bg-opacity-95 flex flex-col lg:flex-row py-4 lg:mt-4 xl:mt-4 lg:py-8 xl:py-8 px-4 lg:px-0'>
        <div className='w-full lg:w-[40rem] xl:w-[40rem] mt-14 lg:ml-20 xl:ml-20'>
          <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold' data-aos="fade-down">
            About <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Me</span>
          </h1>
          <h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded' data-aos="fade-right">
            ____
          </h1>

          <p className='text-xs text-gray-400 sm:text-base md:text-base lg:text-base xl:text-base sm:mt-2 lg:mt-3 xl:mt-3' data-aos="fade-down">
            I provide well-planned and result-driven custom web development solutions tailored to meet unique individual and business needs. I focus on building modern, responsive, and high-performance web applications that deliver real value and a smooth user experience.
            <br></br>
            <br></br>
            With a strong emphasis on clean code, scalability, and functionality, I ensure every solution is crafted to help clients achieve their digital goals efficiently. My approach is guided by creativity, attention to detail, and a commitment to delivering reliable web solutions that support long-term success.

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
        <div data-aos="zoom-in" className='w-full lg:w-[25rem] xl:w-[30rem] flex items-center justify-center mt-8 sm:mt-0 lg:mt-0'>
          <div className="w-[18rem] lg:w-[28rem]">{View}</div>
        </div>
      </div>
    </>
  );
}


export default About;
