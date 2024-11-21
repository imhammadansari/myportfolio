"use client"
import React, { useRef, useState } from 'react';

const RestaurentMessage = ({hideMessage}) => {
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
          <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideMessage} />

          <div className='w-full flex flex-col justify-center items-center'>



            <div className='w-full '>

              <h1 className='font-bold text-lg md:text-xl text-center'>Restaurent Website</h1>
              <p className='text-xs md:text-lg px-2 sm:px-3 md:px-5'>
                I developed a restaurant website using HTML,
                CSS, and JavaScript. The site features a modern design with a welcoming
                homepage, detailed menu, and an image gallery showcasing the restaurant's
                dishes. The contact page provides location, hours, and a form for
                inquiries. The website aims to enhance the restaurant's online presence
                and attract more customers
              </p>

              
              

            </div>


          </div>
        </div>
        </div>
      )}
    </>
  )
}

export default RestaurentMessage