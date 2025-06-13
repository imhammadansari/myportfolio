"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';

const JobPlatformMessage = ({ hideJobPlatformMessage }) => {
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
            <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideJobPlatformMessage} />

            <div className='w-full flex flex-col justify-center items-center'>



              <div className='w-full '>

                <h1 className='font-bold text-lg md:text-xl text-center'>Job Platform Website</h1>
                <p className='text-xs md:text-lg px-5'>
                  Job Platform is a web application that connects
                                     employers and job seekers. Employers can create, update, and manage job postings, while job seekers
                                      can search and apply for jobs. The platform supports advanced filtering by job type, salary range,
                                       and keyword-based search by job title. An admin dashboard allows full control over jobs and 
                                       employer accounts, along with an overview of total job listings. CRUD operations are implemented
                                        throughout for efficient data management.
                </p>

                <div className='flex justify-center gap-2 pb-4 mt-2'>




                  <Link href="https://job-platform-phi.vercel.app/home">
                    <button
                      className='w-[5.5rem] h-9 text-xs sm:w-[7rem] sm:text-sm md:md:w-[7rem] md:text-sm cursor-pointer hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'

                    >
                      Live Demo
                    </button>
                  </Link>
                  <Link href="/jobPlatform">
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

export default JobPlatformMessage