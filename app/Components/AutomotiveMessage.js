"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';

const AutomotiveMessage = ({ hideAutomotiveMessage }) => {
  const [message, setmessage] = useState(true)

  const showMessage = () => {
    setmessage(!message)
  }

  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      {message && (
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5/6 bg-white bg-opacity-80 p-4 rounded-2xl'>
            <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideAutomotiveMessage} />

            <div className='w-full flex flex-col justify-center items-center'>



              <div className='w-full '>

                <h1 className='font-bold text-lg md:text-xl text-center'>Automotive Marketplace</h1>
                <p className='text-xs md:text-lg px-5'>
                 The Automotive Marketplace is a full-stack web application developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This platform connects car owners and buyers in a seamless and user-friendly environment. Car owners can easily create listings by submitting their vehicle details, including make, model, price, and images. Buyers can browse through the listed vehicles, filter based on their preferences, and contact owners directly for inquiries.

The platform includes an admin dashboard where the administrator has full control over vehicle listings, with the ability to create, read, update, and delete (CRUD) any entry. The application ensures smooth user interaction, real-time data updates, and secure backend operations, making it an efficient solution for online vehicle trading.
                </p>

                <div className='flex justify-center gap-2 pb-4 mt-2'>



                  <Link href="https://automotive-market-place.vercel.app/home">
                    <button
                      className='w-[5.5rem] h-9 text-xs sm:w-[7rem] sm:text-sm md:md:w-[7rem] md:text-sm cursor-pointer hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'

                    >
                      Live Demo
                    </button>
                  </Link>

                  <Link href="/autoMotive">
                    <button
                      className='w-[5.5rem] h-9 text-xs sm:w-[7rem] sm:text-sm md:md:w-[7rem] md:text-sm cursor-pointer hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'

                    >
                      Watch Online
                    </button>
                  </Link>
                </div>


              </div>


            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AutomotiveMessage