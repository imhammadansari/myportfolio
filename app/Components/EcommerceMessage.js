"use client"
import React, { useRef, useState } from 'react';

const EcommerceMessage = ({hideEcommerceMessage}) => {
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

              <div className='flex justify-center pb-4 mt-2'>

                <button className='w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:md:w-[6rem] md:text-sm cursor-pointer bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                <button className='w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:md:w-[6rem] md:text-sm cursor-pointer bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4'>Source</button>

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