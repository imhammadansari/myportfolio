"use client";
import React, { useRef, useState } from 'react';

const ContractIQMessage = ({ hideContractIQMessage }) => {

    const [message, setMessage] = useState(true);
  return (
    <>
    {message && (
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5/6 bg-white bg-opacity-80 p-4 rounded-2xl'>
          <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideContractIQMessage} alt="Close" />

          <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-full '>
              <h1 className='font-bold text-lg md:text-xl text-center'>ContractIQ Website</h1>
              <p className='text-xs md:text-lg px-2 sm:px-3 md:px-5'>
              I developed a frontend project using React.js for my client, who requested a website named **ContractIQ**. The website 
              provides valuable information and guidance about Ethereum smart contracts, offering users insights into their functionality 
              and usage. The project showcases my skills in building user-friendly, responsive web applications using modern frontend 
              technologies.
              </p>

              

              
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default ContractIQMessage