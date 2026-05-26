"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Achievements = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') {
            AOS.init({ offset: 20, duration: 1000 });
        }
    }, []);

    const achievements = [
        { number: '50+', label: 'Projects Completed' },
        { number: '30+', label: 'Happy Clients' },
        { number: '98%', label: 'Client Satisfaction' },
        { number: '24/7', label: 'Support Available' },
    ];

    if (!isClient) {
        return <div className='w-full py-16 bg-gradient-to-r from-[#d062a0]/10 to-[#5c0bed]/10'></div>;
    }

    return (
        <section className='w-full py-16 bg-gradient-to-r from-[#d062a0]/10 to-[#5c0bed]/10'>
            <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            className='text-center'
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>
                                {item.number}
                            </h3>
                            <p className='text-gray-400 text-xs sm:text-sm mt-2'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;