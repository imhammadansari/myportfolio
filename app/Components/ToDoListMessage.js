"use client"
import React, { useRef, useState } from 'react';

const ToDoListMessage = ({hideToDoListMessage}) => {
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
          <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideToDoListMessage} />

          <div className='w-full flex flex-col justify-center items-center'>



            <div className='w-full '>

              <h1 className='font-bold text-lg md:text-xl text-center'>To Do List</h1>
              <p className='text-xs md:text-lg px-2 sm:px-3 md:px-5'>
              I Developed a To-Do List app using HTML, CSS, and JavaScript. This app allows users to easily add, edit, and delete tasks, helping them stay organized and productive. With a simple and intuitive design, it ensures a smooth user experience while managing daily tasks efficiently.
              </p>

              
              

            </div>


          </div>
        </div>
        </div>
      )}
    </>
  )
}

export default ToDoListMessage