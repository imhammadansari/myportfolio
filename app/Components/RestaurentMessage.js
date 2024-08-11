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

              <div className='flex justify-center pb-4 mt-2'>

                <button onClick={playAudio} className='cursor-pointer w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:md:w-[6rem] md:text-sm  bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                <button onClick={playAudio} className='cursor-pointer w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:md:w-[6rem] md:text-sm bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4'>Source</button>

              </div>
              <audio ref={audioRef}>
                  <source src="./chin_tapak_dum_dum.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>

            </div>


          </div>
        </div>
        </div>
      )}
    </>
  )
}

export default RestaurentMessage