"use client";
import React, { useRef, useState } from 'react';

const AirlineMessage = ({ hideAirMessage }) => {
  const [message, setMessage] = useState(true);
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
            <img className='w-5 cursor-pointer' src='./delete-button.png' onClick={hideAirMessage} alt="Close" />

            <div className='w-full flex flex-col justify-center items-center'>
              <div className='w-full '>
                <h1 className='font-bold text-lg md:text-xl text-center'>Airline Management Website</h1>
                <p className='text-xs md:text-lg px-2 sm:px-3 md:px-5'>
                  I developed an Airline Management Website using Java with a GUI. The website provides a user-friendly interface for managing airline
                  operations, including booking flights, managing passenger information, and scheduling. It features real-time updates and efficient
                  data management, aiming to streamline airline operations and improve customer service.
                </p>

                <div className='flex justify-center pb-4 mt-2'>
                  <button onClick={playAudio} className='w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:w-[6rem] md:text-sm cursor-pointer bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>
                    Live Demo
                  </button>
                  <button onClick={playAudio} className='w-[4.5rem] h-9 text-xs sm:w-[6rem] sm:text-sm md:w-[6rem] md:text-sm cursor-pointer bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4'>
                    Source
                  </button>
                </div>

                {/* Audio Element */}
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
  );
};

export default AirlineMessage;
