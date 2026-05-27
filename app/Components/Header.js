"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [showmenu, setshowmenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menu = () => {
        setshowmenu(!showmenu);
    };

    const scrollToSection = (sectionId) => {
        if (isClient) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setshowmenu(false);
            }
        }
    };

    const navItems = ['Home', 'About', 'Projects', 'Contact'];

    return (
        <>
            <div className={`w-full fixed top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-black'}`}>
                <div className='flex items-center px-5 md:px-[5.5rem] py-4 text-lg lg:text-xl xl:text-xl'>
                    <h1 className='text-lg md:text-2xl lg:text-2xl xl:text-2xl bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>
                        <Link href="/">Hammad.</Link>
                    </h1>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:items-center xl:flex xl:flex-1 xl:justify-end xl:items-center'>
                        <div className='flex items-center gap-8'>
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className='text-white hover:text-[#d062a0] transition-colors duration-300 text-sm font-medium'
                                >
                                    {item}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('contact')}
                                className='px-5 py-2 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 hover:scale-105'
                            >
                                Let's Talk
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='absolute top-0 right-0 flex justify-end px-4 md:px-12 py-4 lg:hidden xl:hidden z-50'>
                        <button onClick={menu} className='text-white focus:outline-none'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {showmenu ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-[60px] left-0 right-0 overflow-x-hidden bg-black/95 backdrop-blur-md transition-all duration-300 ${showmenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className='flex flex-col items-center py-6 gap-4'>
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className='text-white hover:text-[#d062a0] transition-colors duration-300 text-lg'
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className='px-6 py-2 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded-full'
                        >
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
            {/* Spacer for fixed header */}
            <div className="h-16"></div>
        </>
    );
};

export default Header;