"use client"
import React, { useRef, useState } from 'react';

const GymMessage = ({hideGymMessage}) => {
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
          <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideGymMessage} />

          <div className='w-full flex flex-col justify-center items-center'>



            <div className='w-full '>

              <h1 className='font-bold text-lg md:text-xl text-center'>Gym Management System</h1>
              <p className='text-xs md:text-lg px-2 sm:px-3 md:px-5'>
                It is not completed yet, Working in progress
              {/* I developed a Gym Management Website using MERN Stack (MongoDB, Express.js, React.js, Node.js). The website offers a sleek and responsive design, enabling users to manage memberships, book classes, and track their fitness progress. It provides a seamless user experience with real-time updates and efficient data handling, aiming to enhance gym operations and member engagement. */}
              </p>

              <div className='flex justify-center pb-4 mt-2'>

                <button className='w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:md:w-[6rem] md:text-sm cursor-pointer  rounded mt-2 hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed]'>Live Demo</button>
                <button className='w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:md:w-[6rem] md:text-sm cursor-pointer rounded mt-2 hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] mx-2 sm:mx-3 md:mx-4'>Source</button>

              </div>
              

            </div>


          </div>
        </div>
        </div>
      )}
    </>
  )
}

export default GymMessage