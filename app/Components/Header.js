"use client"
import React, { useState } from 'react';

const Header = () => {
    const [showmenu, setshowmenu] = useState(false);

    const menu = () => {
        setshowmenu(!showmenu);
    };

    return (
        <>
            <div className='w-full '>
                <div className='flex px-4 md:px-12 py-4 text-lg lg:text-xl xl:text-xl' style={{ backgroundColor: '#06090b' }}>
                    <h1 className='text-white'>
                        Hammad
                    </h1>

                    <div className='absolute top-0 right-0 flex justify-end px-4 py-4 lg:hidden xl:hidden z-50'>
                        <img className='w-7 cursor-pointer filter invert' src='menu-bar.png' onClick={menu} />
                    </div>

                    {showmenu && (
                        <div className='w-28 h-64 absolute top-0 right-0 flex text-center bg-black my-14 px-4 py-5 z-50'>
                            <ul className='flex flex-col gap-4'>
                                <li className='text-white'><a href='#'>Home</a></li>
                                <li className='text-white'><a href='#'>About</a></li>
                                <li className='text-white'><a href='#'>Skills</a></li>
                                <li className='text-white'><a href='#'>Projects</a></li>
                                <li className='text-white'><a href='#'>Contact</a></li>
                            </ul>
                        </div>
                    )}

                    <div className='hidden lg:w-full lg:flex lg:justify-end lg:items-center xl:w-full xl:flex xl:justify-end xl:items-center'>
                        <ul className='flex justify-end items-center text-white gap-4'>
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-8 flex items-center justify-center'>
                                <a href='./Home'>Home</a>
                            </li>
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-8 flex items-center justify-center'>
                                <a href='./About'>About</a>
                            </li>
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-8 flex items-center justify-center'>
                                <a href='./Skills'>Skills</a>
                            </li>
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-8 flex items-center justify-center'>
                                <a href='./Projects'>Projects</a>
                            </li>
                            <li className='hover:bg-sky-600 hover:text-white rounded w-24 h-8 flex items-center justify-center'>
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
