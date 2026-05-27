"use client";
import React from 'react';
import Social from './Social';
import Link from 'next/link';

const Footer = () => {
    const quickLinks = ['Home', 'About', 'Projects', 'Contact'];
    const ourServices = ['Web Development', 'MERN Stack', 'Next.js', 'React.js', 'Node.js', 'Full Stack'];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className='w-full bg-black pt-16 pb-8 px-4'>
            <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                    {/* Brand Section */}
                    <div>
                        <h3 className='text-2xl font-bold bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mb-4'>
                            Hammad.
                        </h3>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            Creating powerful digital experiences with innovative web solutions.
                            I help businesses grow through modern web development.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-white font-semibold text-lg mb-4'>Quick Links</h4>
                        <ul className='space-y-2'>
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <button
                                        onClick={() => scrollToSection(link.toLowerCase())}
                                        className='text-gray-400 hover:text-[#d062a0] text-sm transition-colors duration-300'
                                    >
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className='text-white font-semibold text-lg mb-4'>Our Services</h4>
                        <ul className='space-y-2'>
                            {ourServices.map((service) => (
                                <li key={service}>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className='text-gray-400 hover:text-[#d062a0] text-sm transition-colors duration-300'
                                    >
                                        {service}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='text-white font-semibold text-lg mb-4'>Get In Touch</h4>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-3'>
                                <svg className="w-5 h-5 text-[#d062a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className='text-gray-400 text-sm'>+92-3282020955</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <svg className="w-5 h-5 text-[#d062a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className='text-gray-400 text-sm'>ansarihamad084@gmail.com</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <svg className="w-5 h-5 text-[#d062a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className='text-gray-400 text-sm'>Karachi, Pakistan</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Bar */}
                <div className='w-full h-16 lg:h-12 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-8 rounded-lg mb-6'>
                    <h1 className='text-white text-xs sm:text-sm md:text-base font-medium'>
                        Get Connected with me on Social Networks
                    </h1>
                    <Social />
                </div>

                {/* Copyright */}
                <div className='text-center pt-6 border-t border-white/10'>
                    <p className='text-gray-500 text-xs sm:text-sm'>
                        © Copyright 2025 - Created by <span className='text-[#d062a0]'>Hammad Ansari</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;