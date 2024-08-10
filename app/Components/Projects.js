"use client";
import React, { useEffect, useState } from 'react';
import 'animate.css';
// import { WOW } from 'wowjs';
import RestaurentMessage from './RestaurentMessage';
import GymMessage from './GymMessage';
import QuizMessage from './QuizMessage';
import AirlineMessage from './AirlineMessage';
import RentCarMessage from './RentCarMessage';

const Projects = () => {
    const [restaurentMessage, setRestaurentMessage] = useState(false);
    const [gymMessage, setGymMessage] = useState(false);
    const [quizMessage, setQuizMessage] = useState(false);
    const [airlineMessage, setairlineMessage] = useState(false)
    const [rentcarMessage, setrentcarMessage] = useState(false)

    const showRestaurentMessage = () => {
        setRestaurentMessage(!restaurentMessage);
    };

    const hideMessage = () => {
        setRestaurentMessage(false);
    };

    const showGymMessage = () => {
        setGymMessage(!gymMessage);
    };

    const hideGymMessage = () => {
        setGymMessage(false);
    };

    const showQuizMessage = () => {
        setQuizMessage(!quizMessage);
    };

    const hideQuizMessage = () => {
        setQuizMessage(false);
    };

    const showAirMessage = () => {
        setairlineMessage(!airlineMessage);
    };

    const hideAirMessage = () => {
        setairlineMessage(false);
    };

    const showRentCarMessage = () => {
        setrentcarMessage(!rentcarMessage);
    };

    const hideRentCarMessage = () => {
        setrentcarMessage(false);
    };

    // useEffect(() => {
    //     const wow = new WOW({
    //       offset: 100,
    //       mobile: false,
    //       live: true
    //     });
    //     wow.init();
      
    // }, []);

    return (
        <>

            <div className='w-full'>


                <div className='text-center mt-12 lg:mt-16 xl:mt-16'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold'>My <span className='text-sky-600'>Projects</span></h1>
                    <h1 className='text-sky-600 mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>____</h1>

                </div>

                <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 mt-5 lg:mt-10 xl:mt-10'>

                    <div className='relative'>
                        {gymMessage && (
                            <div className="fixed inset-0 w-full h-screen bg-black opacity-90 z-40"> </div>
                        )}

                        {gymMessage && (
                            <div className="fixed inset-0 w-full h-screen flex justify-center items-center z-50">
                                <GymMessage hideGymMessage={hideGymMessage} />

                            </div>
                        )}

                        <div className='grid grid-cols-2'>

                            <img className='lg:w-96 lg:my-2 xl:my-1 rounded-xl transition-transform duration-300 hover:scale-110  animate__animated animate__backInLeft' src='./gym.png' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center  animate__animated animate__backInRight'>

                                <h1 className='font-bold text-sm md:text-lg lg:text-xl xl:text-xl'>Gym Management Website</h1>
                                <p className='hidden md:text-sm lg:text-base xl:text-base lg:block'>I developed a Gym Management Website using React/Next.js and Tailwind CSS.
                                    The website offers a sleek and responsive design, enabling users to manage
                                    memberships, book classes, and track their fitness progress. It provides
                                    a seamless user experience with real-time updates and efficient data
                                    handling, aiming to enhance gym operations and member engagement.</p>

                                <div>
                                    <button onClick={showGymMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-5'>Source</button>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="relative">

                        {/* Background overlay */}
                        {restaurentMessage && (
                            <div className="fixed inset-0 w-full h-screen bg-black opacity-90 z-40"></div>
                        )}

                        {/* Message Component */}
                        {restaurentMessage && (
                            <div className="fixed inset-0 w-full h-screen flex items-center justify-center z-50">
                                <RestaurentMessage hideMessage={hideMessage} />
                            </div>
                        )}

                        {/* Project Content */}
                        <div className="grid grid-cols-2 my-10">
                            <img
                                className="lg:my-3 xl:my-3 lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110  animate__animated animate__backInLeft"
                                src="./restaurent2.jpg"
                            />
                            <div className="px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center  animate__animated animate__backInRight">
                                <h1 className="font-bold text-sm md:text-lg lg:text-xl xl:text-xl">Restaurent System Website</h1>
                                <p className="hidden md:text-sm lg:text-base xl:text-base lg:block">
                                    I developed a restaurant website using HTML, CSS, and JavaScript. The site features a modern design with a welcoming homepage, detailed menu, and an image gallery showcasing the restaurant's dishes. The contact page provides location, hours, and a form for inquiries. The website aims to enhance the restaurant's online presence and attract more customers.
                                </p>
                                <div>
                                    <button onClick={showRestaurentMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-5'>Source</button>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className='relative'>
                        {quizMessage && (
                            <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-90 z-40'> </div>
                        )}

                        {quizMessage && (
                            <div className='fixed inset-0 w-full h-screen flex justify-center items-center z-50'>
                                <QuizMessage hideQuizMessage={hideQuizMessage} />
                            </div>

                        )}


                        <div className='grid grid-cols-2 my-10'>

                            <img className='lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110  animate__animated animate__backInLeft' src='./quiz.png' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center  animate__animated animate__backInRight'>

                                <h1 className='font-bold text-sm  md:text-lg lg:text-xl xl:text-xl'>Quiz Management App</h1>
                                <p className='hidden md:text-sm lg:text-base xl:text-base lg:block'>I developed a Quiz Management App using Java with a GUI. The app allows users to create, manage,
                                    and take quizzes through an intuitive graphical interface. Key features include quiz creation, question management,
                                    and real-time scoring. The application aims to provide an efficient and user-friendly platform for both quiz administrators
                                    and participants.</p>

                                    <div>
                                    <button onClick={showQuizMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    <button className='hidden lg:inline-block xl:inline-block md:w-[6rem] md:text-sm lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                                    <button className='hidden lg:inline-block xl:inline-block md:w-[6rem] md:text-sm lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-5'>Source</button>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className='relative'>

                        {airlineMessage && (
                            <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-90 z-40'> </div>
                        )}

                        {airlineMessage && (
                            <div className='fixed inset-0 w-full h-screen flex justify-center items-center z-50'>
                                <AirlineMessage hideAirMessage={hideAirMessage} />
                            </div>
                        )}


                        <div className='grid grid-cols-2 my-10'>

                            <img className='lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110  animate__animated animate__backInLeft' src='./airline.jpg' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center  animate__animated animate__backInRight'>

                                <h1 className='font-bold text-sm  md:text-lg lg:text-xl xl:text-xl'>Airline Management Website</h1>
                                <p className='hidden md:text-sm lg:text-base xl:text-base lg:block'>I developed an Airline Management Website using Java with a GUI. The website provides a
                                    user-friendly interface for managing airline operations, including booking flights, managing passenger information,
                                    and scheduling. It features real-time updates and efficient data management, aiming to streamline airline operations
                                    and improve customer service.</p>

                                    <div>
                                    <button onClick={showAirMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    <button className='hidden lg:inline-block xl:inline-block md:w-[6rem] md:text-sm lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                                    <button className='hidden lg:inline-block xl:inline-block md:w-[6rem] md:text-sm lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-5'>Source</button>
                                </div>
                            </div>

                        </div>

                    </div>




                    <div className='relative'>

                        {rentcarMessage && (
                            <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-90 z-40'> </div>
                        )}

                        {rentcarMessage && (
                            <div className='fixed inset-0 w-full h-screen flex items-center justify-center z-50'>
                                <RentCarMessage hideRentCarMessage={hideRentCarMessage} />

                            </div>
                        )}

                        <div className='grid grid-cols-2 my-10'>

                            <img className='lg:my-3 xl:my-3 lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110  animate__animated animate__backInLeft' src='./rentcar.jpg' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center  animate__animated animate__backInRight'>

                                <h1 className='font-bold text-sm md:text-lg lg:text-xl xl:text-xl'>Rent-A-Car System</h1>
                                <p className='hidden md:text-sm lg:text-base lg:block'>I developed a Rent a Car website using HTML, CSS, and JavaScript. The website showcases available
                                    cars, rental options, and prices. It features a user-friendly booking page and a contact page with essential information.
                                    The aim is to streamline the car rental process and improve customer engagement.</p>

                                    <div>
                                    <button onClick={showRentCarMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-5'>Source</button>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default Projects