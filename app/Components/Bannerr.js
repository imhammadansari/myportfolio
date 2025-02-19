"use client"
import React, { useEffect } from 'react'
import 'animate.css';
import Aos from 'aos' 
import 'aos/dist/aos.css';
import { useLottie } from "lottie-react";
import BannerAnimation from "../assets/bannerAnimate.json";

const Bannerr = () => {

    const options = {
        animationData: BannerAnimation,
        loop: true,
      };
    
      const { View } = useLottie(options);
      
      useEffect(() => {
        Aos.init({
          offset: 20
        });
      }, [])

  return (
    <>
    <div className='w-full h-[30rem] flex flex-col md:flex-row bg-black'>
        <div className='h-full flex flex-col md:mx-12 lg:mx-24 xl:mx-24 w-full md:w-1/2 text-center md:text-start items-center justify-center md:items-start'>
        <h1 className='text-base md:text-xl text-white lg:text-3xl xl:text-3xl font-bold' data-aos="fade-left">
            Hi, I'm &lt;/&gt; <br/> <span className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold animate__animated 
            animate__backInLeft bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent">
  Hammad Ansari
</span>
</h1>
        <h1 className='text-base lg:text-xl xl:text-xl lg:my-1 xl:my-1 text-white' data-aos="fade-up">MERN Stack Developer</h1>

        <button 
  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
  data-aos="fade-left" 
  className='w-[5rem] md:w-[8rem] lg:w-32 xl:w-32 h-7 md:h-9 lg:h-10 xl:h-10 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white mt-2 text-xs md:text-base lg:text-lg xl:text-lg rounded 
  transition-all duration-300 ease-in-out 
  hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed]'
>
  Contact Me
</button>

        </div>

        <div className='flex items-center justify-center'>
        <div className="w-[25rem] lg:w-[36rem]">{View}</div>

        </div>

    </div>
    </>
  )
}

export default Bannerr