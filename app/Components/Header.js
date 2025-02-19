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
            <div className='w-full bg-black'>
                <div className='flex items-center px-4 md:px-[3.1rem] py-4 text-lg lg:text-xl xl:text-xl'>
                    <h1 className='text-lg md:text-2xl lg:text-2xl xl:text-2xl bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>
                        <Link href="/">Hammad.</Link>
                    </h1>

                    <div className='absolute top-0 right-0 flex justify-end px-4 md:px-12 py-4 lg:hidden xl:hidden z-50'>
                        <img className='w-[1.5rem] cursor-pointer bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-1 rounded-sm' src='./more.png' onClick={menu} />
                    </div>

                    {showmenu && (
                        <div className='w-36 md:w-48 h-56 absolute top-0 right-0 flex justify-center text-center my-9 px-4 py-3 z-50 rounded'>
                        <div className='flex gap-4 py-2'>
                        <a href="https://www.linkedin.com/in/hammad-ansari-mern-stack-developer">
                        <img className='w-9 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-2 rounded-full' src='./linkedinBlack.png' />
                        </a>
                        <a href="https://github.com/imhammadansari">
                        <img className='w-9 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-2 rounded-full' src='./github.png' />
                        </a>
                        <a href="mailto:ansarihamad084@gmail.com">
                        <img 
                          className='w-9 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-2 rounded-full' 
                          src='./mail.png' 
                          alt='Email Icon' 
                        />
                      </a>
                      
                      </div>
                        </div>
                    )}

                    <div className='hidden lg:w-full lg:flex lg:justify-end lg:items-center xl:w-full xl:flex xl:justify-end xl:items-center'>
                    <div className='flex gap-8'>
  <a href="https://www.linkedin.com/in/hammad-ansari-mern-stack-developer">
  <img className='w-9 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-2 rounded-lg' src='./linkedinBlack.png' />
  </a>
  <a href="https://github.com/imhammadansari">
  <img className='w-9 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-2 rounded-lg' src='./github.png' />
  </a>
  <a href="mailto:ansarihamad084@gmail.com">
  <img 
    className='w-9 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] p-2 rounded-lg' 
    src='./mail.png' 
    alt='Email Icon' 
  />
</a>

</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
