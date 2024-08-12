"use client"
import React, { useEffect } from 'react'
import 'animate.css';
import Aos from 'aos' 
import 'aos/dist/aos.css';


  


const Banner = () => {
  useEffect(() => {
    Aos.init({
      offset: 20
    });
  }, [])

  return (
    <>
    <div className='relative w-full h-auto'>
      <div className=''>
        <img className='w-full h-full ' src='./new.jpg' />
        <div className='bg-black absolute inset-0 w-full h-full opacity-50'></div>
        
        <div className='absolute inset-0 text-white mx-4 my-10 sm:m md:mx-12 md:my-20 lg:mx-24 lg:my-36 xl:mx-24 xl:my-36 w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[40rem] xl:w-[40rem]'>
        <h1 className='text-sm sm:text-base md:text-xl lg:text-3xl xl:text-3xl font-bold' data-aos="fade-left">Hi, I'm &lt;/&gt; <br/> <span className='text-sky-600 text-2xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-6xl font-bold animate__animated animate__backInLeft'>Hammad Ansari</span></h1>
        <h1 className='text-sm md:text-base lg:text-xl xl:text-xl lg:my-1 xl:my-1 text-white' data-aos="fade-up">Front-End Developer</h1>

        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} data-aos="fade-left" className='w-[5rem] md:w-[8rem] lg:w-32 xl:w-32 h-7 md:h-9 lg:h-10 xl:h-10 bg-sky-600 text-white mt-2 text-xs md:text-base lg:text-lg xl:text-lg hover:bg-white hover:text-sky-600 rounded'>Contact Me</button>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default Banner