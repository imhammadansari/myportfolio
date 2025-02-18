"use client"
import React, { useEffect } from 'react';
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        Aos.init({
          offset: 100
        });
    }, []);

    return (
        <div className='w-full bg-black bg-opacity-95'>

            {/* Title */}
            <div className='text-center mt-2 lg:mt-4 xl:mt-4 pt-4 lg:pt-8 xl:pt-8' data-aos="zoom-in">
                <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold'>
                    My <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Skills</span>
                </h1>
                <h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
                    ____
                </h1>
            </div>

            {/* Scrolling Skills Section */}
            <div className="overflow-hidden w-full py-4 lg:py-8 xl:py-8 mt-7 sm:mt-8 md:mt-9 lg:mt-10 xl:mt-12 relative">
                <div className="flex gap-8 md:gap-28 animate-scroll whitespace-nowrap">
                    {/* First Set */}
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./mongo.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>MongoDB</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./express-js.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Express</p>
    </div>

                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-14 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./physics.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>React</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./nodejs.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Node JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-next.js-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Next JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-tailwind-css-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>TailwindCSS</p>
    </div>
    
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./mongo.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>MongoDB</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./express-js.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Express</p>
    </div>

                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-14 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./physics.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>React</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./nodejs.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Node JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-next.js-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Next JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-tailwind-css-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>TailwindCSS</p>
    </div>
    
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./mongo.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>MongoDB</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./express-js.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Express</p>
    </div>

                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-14 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./physics.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>React</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./nodejs.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Node JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-next.js-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Next JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-tailwind-css-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>TailwindCSS</p>
    </div>
    
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./mongo.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>MongoDB</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./express-js.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Express</p>
    </div>

                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-14 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./physics.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>React</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./nodejs.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Node JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-next.js-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Next JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-tailwind-css-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>TailwindCSS</p>
    </div>
    
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./mongo.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>MongoDB</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./express-js.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Express</p>
    </div>

                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-14 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./physics.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>React</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./nodejs.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Node JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-next.js-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>Next JS</p>
    </div>
                    <div className='flex flex-col justify-center items-center' data-aos="zoom-in">
        <img className='w-8 h-8 sm:w-14 md:w-16 lg:w-24 xl:w-24 sm:h-14 md:h-16 lg:h-24 xl:h-24 animate-pulse' src='./icons8-tailwind-css-48.png' />
        <p className='text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl md:font-bold lg:font-bold xl:font-bold text-center'>TailwindCSS</p>
    </div>
    

                </div>
            </div>

        </div>
    );
};

export default Skills;
