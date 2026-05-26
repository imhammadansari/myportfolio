"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WebDevelopment = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') {
            AOS.init({ offset: 20, duration: 1000 });
        }
    }, []);

    // const services = [
    //     {
    //         title: "MERN Stack Development",
    //         description: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js with scalable architecture",
    //         icon: "🚀",
    //         features: ["RESTful APIs", "Real-time apps", "Authentication", "Database Design"]
    //     },
    //     {
    //         title: "Next.js Development",
    //         description: "Server-side rendering, static site generation, and blazing fast React applications",
    //         icon: "⚡",
    //         features: ["SSR/SSG", "API Routes", "Image Optimization", "File-based Routing"]
    //     },
    //     {
    //         title: "Custom Website Development",
    //         description: "Tailor-made websites built with modern technologies for your specific business needs",
    //         icon: "💻",
    //         features: ["Responsive Design", "CMS Integration", "E-commerce", "Performance Optimized"]
    //     },
    //     {
    //         title: "Frontend Development",
    //         description: "Beautiful, interactive user interfaces with React.js, Tailwind CSS, and modern frameworks",
    //         icon: "🎨",
    //         features: ["Pixel Perfect", "Animations", "Cross-browser", "Mobile-first"]
    //     },
    //     {
    //         title: "Backend Development",
    //         description: "Robust server-side solutions with Node.js, Express, and database management",
    //         icon: "🔧",
    //         features: ["Scalable APIs", "Security", "Database Design", "Cloud Deployment"]
    //     },
    //     {
    //         title: "Full Stack Solutions",
    //         description: "Complete end-to-end web applications from concept to deployment",
    //         icon: "🌟",
    //         features: ["Project Architecture", "DevOps", "Testing", "Maintenance"]
    //     }
    // ];

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
            {/* <div className='text-center mt-2 lg:mt-4 xl:mt-4 pt-4 lg:pt-8 xl:pt-8'>
                <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold'>
                    Web <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Development</span>
                </h1>
                <h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
                    ____
                </h1>
                <p className='text-gray-400 mt-4 max-w-2xl mx-auto px-4 text-sm sm:text-base'>
                    We Facilitate Brands Worldwide with cutting-edge web solutions
                </p>
            </div> */}

            {/* <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className='bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-white/10 hover:border-[#d062a0]/50 transition-all duration-300 hover:scale-105 group'
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className='text-5xl mb-4'>{service.icon}</div>
                            <h3 className='text-xl font-bold text-white mb-3'>{service.title}</h3>
                            <p className='text-gray-400 text-sm mb-4'>{service.description}</p>
                            <div className='flex flex-wrap gap-2 mt-4'>
                                {service.features.map((feature, idx) => (
                                    <span key={idx} className='text-xs px-2 py-1 bg-gradient-to-r from-[#d062a0]/20 to-[#5c0bed]/20 text-gray-300 rounded-full'>
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Creative Mastery Section - Like reference site */}
            <div className='bg-gradient-to-r from-[#d062a0]/10 to-[#5c0bed]/10 py-16 mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 rounded-2xl'>
                <div className='text-center px-4'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4'>
                        CREATIVE MASTERY IN
                    </h2>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mb-6'>
                        WEB DESIGN AND DEVELOPMENT
                    </h2>
                    <p className='text-gray-300 max-w-3xl mx-auto text-sm sm:text-base mb-8'>
                        My super talented creative web development expertise provides clients with most innovative and unique solutons. 
                        My work and professionalism has earned me an outstanding reputation and I strive hard to keep shining 
                        and making my customers happy.
                    </p>
                    <button 
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className='px-8 py-3 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded-full font-medium hover:scale-105 transition-all duration-300'
                    >
                        GET STARTED
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WebDevelopment;