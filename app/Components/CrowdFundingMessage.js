"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';

const CrowdFundingMessage = ({hideCrowdFundingMessage}) => {
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
          <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideCrowdFundingMessage} />

          <div className='w-full flex flex-col justify-center items-center'>



            <div className='w-full '>

              <h1 className='font-bold text-lg md:text-xl text-center'>CrowdFunding Website</h1>
              <p className='text-xs md:text-lg px-5'>
              CrowdFunding is a MERN 
                                    stack-based funding platform designed to support students in need of financial assistance for 
                                    their education. Students can create donation requests by sharing their academic details and funding
                                     needs, while donors can browse these requests and contribute securely. The platform includes an 
                                     admin panel to manage student requests, donor activities, and payment processing, ensuring 
                                     transparency and efficiency. This Platform connects generous donors with deserving students, making 
                                     education accessible to all.
              </p>

              <div className='flex justify-center gap-2 pb-4 mt-2'>

                <button
                                        className='w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:md:w-[6rem] md:text-sm cursor-pointer hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'
                                        onClick={() => {
                                            window.location.href = 'https://crowdfunding-5ttm.onrender.com/home';
                                        }}
                                    >
                                        Live Demo
                                    </button>

                                    
                                    <Link href="/crowdFunding">
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

export default CrowdFundingMessage