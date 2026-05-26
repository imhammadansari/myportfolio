"use client";
import React, { useEffect, useState } from 'react';
import 'animate.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
});
import BannerAnimation from "../assets/bannerAnimate.json";

const Bannerr = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        Aos.init({ offset: 20, duration: 1000 });
    }, []);

    return (
        <div className='w-full h-[30rem] flex flex-col md:flex-row bg-black items-center'>
            <div className='flex flex-col md:mx-12 lg:mx-24 xl:mx-24 w-full md:w-1/2 text-center md:text-start items-center justify-center md:items-start'>
                <h1 className='text-base md:text-xl text-white lg:text-3xl xl:text-3xl font-bold' data-aos="fade-left">
                    Hi, I'm &lt;/&gt; <br />
                    <span className="text-3xl md:text-4xl lg:text-6xl xl:text-6xl font-bold animate__animated animate__backInLeft bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent">
                        Hammad Ansari
                    </span>
                </h1>
                <h1 className='text-base lg:text-xl xl:text-xl lg:mt-2 xl:mt-2 text-white' data-aos="fade-up">
                    Full Stack Developer
                </h1>
                {/* Short Subline */}
                <p className='text-gray-400 text-xs md:text-sm lg:text-base xl:text-base max-w-md mt-2' data-aos="fade-up" data-aos-delay="100">
                    Building scalable web applications with modern technologies
                </p>
                <button
                    onClick={() => {
                        if (typeof window !== "undefined") {
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                    data-aos="fade-left"
                    className='px-5 py-2 mt-4 md:mt-6 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded-full text-sm md:text-base font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#d062a0]/25'
                >
                    Contact Me
                </button>
            </div>
            <div className="w-[25rem] lg:w-[36rem]">
                <Lottie
                    animationData={BannerAnimation}
                    loop={true}
                />
            </div>
        </div>
    );
};

export default Bannerr;