"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [showmenu, setshowmenu] = useState(false);

    const menu = () => {
        setshowmenu(!showmenu);
    };

    return (
        <>
            <div className='w-full '>
                <div className='flex items-center px-4 md:px-12 py-4 text-lg lg:text-xl xl:text-xl' style={{ backgroundColor: '#06090b' }}>
                    <h1 className='text-lg md:text-2xl lg:text-2xl xl:text-2xl text-white'>
                        <Link href="/">Hammad.</Link>
                    </h1>

                    <div className='absolute top-0 right-0 flex justify-end px-4 md:px-12 py-4 lg:hidden xl:hidden z-50'>
                        <img className='w-7 cursor-pointer filter invert' src='menu-bar.png' onClick={menu} />
                    </div>

                    {showmenu && (
                        <div className='w-36 md:w-48 h-56 absolute top-0 right-0 flex justify-center text-center my-14 px-4 py-5 z-50 rounded'style={{ backgroundColor: '#06090b' }}>
                            <ul className='flex flex-col gap-4'>
                                <li className='text-white hover:bg-sky-600 hover:text-white'><Link href="/">Home</Link></li>
                                <li className='text-white hover:bg-sky-600 hover:text-white'><Link href='./About'>About</Link></li>
                                <li className='text-white hover:bg-sky-600 hover:text-white'><Link href='./Projects'>Projects</Link></li>
                                <li className='text-white hover:bg-sky-600 hover:text-white'><Link href='./Contact'>Contact</Link></li>
                            </ul>
                        </div>
                    )}

                    <div className='hidden lg:w-full lg:flex lg:justify-end lg:items-center xl:w-full xl:flex xl:justify-end xl:items-center'>
                        <ul className='flex justify-end items-center text-white gap-4'>
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-9 flex items-center justify-center'>
                                <a href='/'>Home</a>
                            </li>
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-9 flex items-center justify-center'>
                                <a href='./About'>About</a>
                            </li>
                        
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-9 flex items-center justify-center'>
                                <a href='./Projects'>Projects</a>
                            </li>
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-9 flex items-center justify-center'>
                                <a href='./Contact'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
