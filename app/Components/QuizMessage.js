"use client"
import React, { useRef, useState } from 'react';

const QuizMessage = ({hideQuizMessage}) => {
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
          <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideQuizMessage} />

          <div className='w-full flex flex-col justify-center items-center'>



            <div className='w-full '>

              <h1 className='font-bold text-lg md:text-xl text-center'>Quiz Management App</h1>
              <p className='text-xs md:text-lg px-2 sm:px-3 md:px-5'>
              I developed a Quiz Management App using Java with a GUI. The app allows users to create, manage, and take quizzes through an intuitive
               graphical interface. Key features include quiz creation, question management, and real-time scoring. The application aims to provide
                an efficient and user-friendly platform for both quiz administrators and participants.
              </p>

              
              

            </div>


          </div>
        </div>
        </div>
      )}
    </>
  )
}

export default QuizMessage