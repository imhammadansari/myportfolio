"use client"
import React, { useEffect } from 'react';
import 'animate.css';
// import { WOW } from 'wowjs'; 
import Aos from 'aos' 
import 'aos/dist/aos.css';



const Skills = () => {
    useEffect(() => {
        Aos.init({
          offset: 100
        });
      }, [])


    return (
        <>

            <div className='w-full bg-black bg-opacity-95'>

                <div className='text-center mt-2 lg:mt-4 xl:mt-4 pt-4 lg:pt-8 xl:pt-8' data-aos="zoom-in">
                    <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold'>My <span className='text-sky-600'>Skills</span></h1>
                    <h1 className='text-sky-600 mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>____</h1>

                </div>

                <div className='w-full pb-4 lg:pb-8 xl:pb-8 mt-7 sm:mt-8 md:mt-9 lg:mt-10 xl:mt-12 flex justify-center gap-[1rem] sm:gap-[1rem] md:gap-[3rem] lg:gap-[7.6rem] xl:gap-[7.6rem] md:mx-auto lg:mx-auto xl:mx-auto'>

    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./mongo.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>MongoDB</p>
    </div>

    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-36 xl:w-36 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./express.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Express</p>
    </div>

    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./physics.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>React</p>
    </div>

    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./nodejs.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Node</p>
    </div>

    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./next.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Next</p>
    </div>

    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./pngwing.com.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Tailwind</p>
    </div>

</div>

            </div>
        </>
    )
}

export default Skills