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
              I developed an Employee
                                    Management System using the MERN stack, which allows secure login for both employees and admins, each
                                    with their personalized dashboards. Employees can apply for leave by specifying the leave type, days,
                                    and department, while also viewing their leave request history with statuses such as Pending,
                                    Approved, and Rejected. They can access and manage their personal profiles, including job details
                                    and contact information. Admins have the ability to register, update, or delete employee records,
                                    as well as manage departments. Additionally, admins can view and manage all employee leave
                                    requests, and they hold the authority to approve or reject leave requests.
              </p>

              <div className='flex justify-center pb-4 mt-2'>

              <button
                                        className='w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:md:w-[6rem] md:text-sm cursor-pointer hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'
                                        onClick={() => {
                                            window.location.href = 'https://employeemanagement-c46a.onrender.com/home';
                                        }}
                                    >
                                        Live Demo
                                    </button>
              </div>

              

              
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default EmployeeManagementMessage