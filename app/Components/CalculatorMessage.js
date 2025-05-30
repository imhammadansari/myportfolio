"use client"
import React, { useRef, useState } from 'react';

const CalculatorMessage = ({hideCalculatorMessage}) => {
  const [message, setmessage] = useState(true)

  const showMessage = () => {
    setmessage(!message)
  }


  return (
    <>
      {message && (
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5/6 bg-white bg-opacity-80 p-4 rounded-2xl'>
          <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideCalculatorMessage} />

          <div className='w-full flex flex-col justify-center items-center'>



            <div className='w-full '>

              <h1 className='font-bold text-lg md:text-xl text-center'>Calculator</h1>
              <p className='text-xs md:text-lg px-2 sm:px-3 md:px-5'>
              I have created a stylish and functional calculator 
                                    using Next.js and Tailwind CSS. It features a clean and responsive design, making it easy to perform 
                                    basic calculations on any device. This project demonstrates my skills in combining modern frameworks 
                                    to build interactive and visually appealing web applications.
              </p>

             
              

            </div>


          </div>
        </div>
        </div>
      )}
    </>
  )
}

export default CalculatorMessage