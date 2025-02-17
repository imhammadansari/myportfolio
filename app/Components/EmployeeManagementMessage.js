"use client";
import React, { useRef, useState } from 'react';

const EmployeeManagementMessage = ({ hideemployeeManagementMessage }) => {

    const [message, setMessage] = useState(true);
  return (
    <>
    {message && (
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5/6 bg-white bg-opacity-80 p-4 rounded-2xl'>
          <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideemployeeManagementMessage} alt="Close" />

          <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full '>
              <h1 className='font-bold text-lg md:text-xl text-center'>Employee Management Website</h1>
              <p className='text-xs md:text-lg px-2 sm:px-3 md:px-5'>
                I developed an Airline Management Website using Java with a GUI. The website provides a user-friendly interface for managing airline
                operations, including booking flights, managing passenger information, and scheduling. It features real-time updates and efficient
                data management, aiming to streamline airline operations and improve customer service.
              </p>

              

              
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default EmployeeManagementMessage