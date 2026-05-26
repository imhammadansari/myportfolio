"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') {
            AOS.init({ offset: 20, duration: 1000 });
        }
    }, []);

    const webServices = [
        {
            title: "MERN Stack Development",
            description: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js with scalable architecture",
            icon: "🚀",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Next.js Development",
            description: "Server-side rendering, static site generation, and blazing fast React applications for optimal performance",
            icon: "⚡",
            color: "from-gray-600 to-gray-900"
        },
        {
            title: "Custom Web Applications",
            description: "Tailor-made web solutions built with modern technologies for your specific business needs",
            icon: "💻",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Frontend Development",
            description: "Beautiful, interactive user interfaces with React.js, Tailwind CSS, and modern frameworks",
            icon: "🎨",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Backend Development",
            description: "Robust server-side solutions with Node.js, Express, and database management systems",
            icon: "🔧",
            color: "from-green-500 to-teal-500"
        },
        {
            title: "Full Stack Solutions",
            description: "Complete end-to-end web applications from concept to deployment with best practices",
            icon: "🌟",
            color: "from-yellow-500 to-orange-500"
        }
    ];

    if (!isClient) {
        return (
            <div className='w-full bg-black py-16'>
                <div className='text-center mt-4 pt-8'>
                    <div className='w-48 h-8 bg-gray-800 rounded mx-auto animate-pulse'></div>
                </div>
            </div>
        );
    }

    return (
        <section className='w-full bg-black py-16'>
            <div className='text-center mb-12 px-4'>
                <h2 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                    What <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>I Do</span>
                </h2>
                <h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
                    ____
                </h1>
                <p className='text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base'>
                    I provide extremely innovative and unique web solutions to help your business stand out
                </p>
            </div>

            <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {webServices.map((service, index) => (
                        <div 
                            key={index} 
                            className='bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-white/10 hover:border-[#d062a0]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group'
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                        >
                            <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>{service.icon}</div>
                            <h3 className='text-lg sm:text-xl font-bold text-white mb-3'>{service.title}</h3>
                            <p className='text-gray-400 text-sm leading-relaxed'>{service.description}</p>
                            <div className='mt-4 pt-4 border-t border-white/10'>
                                <span className='text-xs text-gray-500'>Full Stack Development</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;