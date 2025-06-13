"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';

const EcommerceMessage = ({ hideEcommerceMessage }) => {
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
            <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideEcommerceMessage} />

            <div className='w-full flex flex-col justify-center items-center'>



              <div className='w-full '>

                <h1 className='font-bold text-lg md:text-xl text-center'>E-commerce Website</h1>
                <p className='text-xs md:text-lg px-5'>
                  I developed a fully functional
                  E-commerce website leveraging the MERN Stack (MongoDB, Express.js, React.js, Node.js). It contains a best
                  user friendly interface and modern design. Users can create an account with secure login, explore all
                  product categories, browse products in each category, add items to their cart, and proceed to checkout.
                  Once the order is placed, they can see the details of the Pending orders. This project showcases a smooth
                  and secure shopping experience from start to finish.
                </p>

                <div className='flex justify-center gap-2 pb-4 mt-2'>




                  <Link href="https://mern-ecommerce-peach-gamma.vercel.app/home">
                    <button
                      className='w-[5.5rem] h-9 text-xs sm:w-[7rem] sm:text-sm md:md:w-[7rem] md:text-sm cursor-pointer hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'

                    >
                      Live Demo
                    </button>
                  </Link>

                  <Link href="/ecommerce">
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

export default EcommerceMessage