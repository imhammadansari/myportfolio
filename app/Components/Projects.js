

"use client";
import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import RestaurentMessage from './RestaurentMessage';
import GymMessage from './GymMessage';
import QuizMessage from './QuizMessage';
import AirlineMessage from './AirlineMessage';
import RentCarMessage from './EcommerceMessage';
import EcommerceMessage from './EcommerceMessage';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CalculatorMessage from './CalculatorMessage';
import ToDoListMessage from './ToDoListMessage';

// ..

const Projects = () => {
    const [restaurentMessage, setRestaurentMessage] = useState(false);
    const [gymMessage, setGymMessage] = useState(false);
    const [quizMessage, setQuizMessage] = useState(false);
    const [airlineMessage, setAirlineMessage] = useState(false);
    const [ecommerceMessage, setEcommerceMessage] = useState(false);
    const [calculatorMessage, setcalculatorMessage] = useState(false);
    const [toDoListMessage, settoDoListMessage] = useState(false);

    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const showRestaurentMessage = () => setRestaurentMessage(!restaurentMessage);
    const hideMessage = () => setRestaurentMessage(false);
    const showGymMessage = () => setGymMessage(!gymMessage);
    const hideGymMessage = () => setGymMessage(false);
    const showQuizMessage = () => setQuizMessage(!quizMessage);
    const hideQuizMessage = () => setQuizMessage(false);
    const showAirMessage = () => setAirlineMessage(!airlineMessage);
    const hideAirMessage = () => setAirlineMessage(false);
    const showEcommerceMessage = () => setEcommerceMessage(!ecommerceMessage);
    const hideEcommerceMessage = () => setEcommerceMessage(false);
    const showCalculatorMessage = () => setcalculatorMessage(!calculatorMessage);
    const hideCalculatorMessage = () => setcalculatorMessage(false);
    const showToDoListMessage = () => settoDoListMessage(!toDoListMessage);
    const hideToDoListMessage = () => settoDoListMessage(false);

    useEffect(() => {
        AOS.init({
            offset: 20,
            duration: 1000,
            mirror: true

        });
        // const WOW = require('wowjs').WOW;
        // const wow = new WOW({
        //     offset: 100,
        //     mobile: true,
        //     live: true
        // });
        // wow.init();
    }, []);

    return (
        <>
            <div className='w-full'>


                <div className='text-center mt-12 lg:mt-16 xl:mt-16'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                        Real-Time <span className='text-sky-600'>Projects</span>
                    </h1>
                    <h1 className='text-sky-600 mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
                        ____
                    </h1>
                </div>

                <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 mt-5 lg:mt-10 xl:mt-10'>
                    <div className='relative'>
                        {ecommerceMessage && (
                            <div className="fixed inset-0 w-full h-screen bg-black opacity-90 z-40"> </div>
                        )}
                        {ecommerceMessage && (
                            <div className="fixed inset-0 w-full h-screen flex justify-center items-center z-50">
                                <EcommerceMessage hideEcommerceMessage={hideEcommerceMessage} />
                            </div>
                        )}
                        <div className='grid grid-cols-2'>
                            <img className='lg:w-96 xl:my-8 lg:my-8 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./ecommerce.png' />
                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">
                                <h1 className='font-bold text-sm md:text-lg lg:text-xl xl:text-xl'>E-commmerce Website</h1>
                                <p className='hidden md:text-sm lg:text-base xl:text-base lg:block'>I developed a fully functional
                                    E-commerce website leveraging the MERN Stack (MongoDB, Express.js, React.js, Node.js). It contains a best
                                    user friendly interface and modern design. Users can create an account with secure login, explore all
                                    product categories, browse products in each category, add items to their cart, and proceed to checkout.
                                    Once the order is placed, they can see the details of the Pending orders. This project showcases a smooth
                                    and secure shopping experience from start to finish.</p>
                                <div>
                                    <button onClick={showEcommerceMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-5'>Source</button>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <img className='lg:w-96 lg:my-2 xl:my-8 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./gym.png' />
                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">
                                <h1 className='font-bold text-sm md:text-lg lg:text-xl xl:text-xl'>Gym Management Website</h1>
                                <p className='hidden md:text-sm lg:text-base xl:text-base lg:block'>I developed a Gym Management Website using MERN Stack (MongoDB, Express.js, React.js, Node.js). The website offers a sleek and responsive design, enabling users to manage memberships, book classes, and track their fitness progress. It provides a seamless user experience with real-time updates and efficient data handling, aiming to enhance gym operations and member engagement.

                                </p>
                                <p className='font-bold hidden md:text-sm lg:text-base xl:text-base lg:block'>But, It is not completed yet, Working in progress</p>
                                <div>
                                    <button onClick={showGymMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-5'>Source</button>
                                </div>
                            </div>
                        </div>





                    </div>

                    <div className='text-center mt-12 lg:mt-16 xl:mt-24'>
                        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                            Academetic <span className='text-sky-600'>Projects</span>
                        </h1>
                        <h1 className='text-sky-600 mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
                            ____
                        </h1>
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
                                className="lg:my-3 xl:my-9 lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110 " data-aos="flip-left"
                                src="./restaurent2.jpg"
                            />
                            <div className="px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center" data-aos="flip-right">
                                <h1 className="font-bold text-sm md:text-lg lg:text-xl xl:text-xl">Restaurent Website</h1>
                                <p className="hidden md:text-sm lg:text-base xl:text-base lg:block">
                                    I developed a restaurant website using HTML, CSS, and JavaScript. The site features a modern design with a welcoming homepage, detailed menu, and an image gallery showcasing the restaurant's dishes. The contact page provides location, hours, and a form for inquiries. The website aims to enhance the restaurant's online presence and attract more customers.
                                </p>
                                <div>
                                    <button onClick={showRestaurentMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    
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

                            <img className='lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./quiz.png' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">

                                <h1 className='font-bold text-sm  md:text-lg lg:text-xl xl:text-xl'>Quiz Management App</h1>
                                <p className='hidden md:text-sm lg:text-base xl:text-base lg:block'>I developed a Quiz Management App using Java with a GUI. The app allows users to create, manage,
                                    and take quizzes through an intuitive graphical interface. Key features include quiz creation, question management,
                                    and real-time scoring. The application aims to provide an efficient and user-friendly platform for both quiz administrators
                                    and participants.</p>

                                <div>
                                    <button onClick={showQuizMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
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

                            <img className='lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./airline.jpg' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">

                                <h1 className='font-bold text-sm  md:text-lg lg:text-xl xl:text-xl'>Airline Management Website</h1>
                                <p className='hidden md:text-sm lg:text-base xl:text-base lg:block'>I developed an Airline Management Website using Java with a GUI. The website provides a
                                    user-friendly interface for managing airline operations, including booking flights, managing passenger information,
                                    and scheduling. It features real-time updates and efficient data management, aiming to streamline airline operations
                                    and improve customer service.</p>

                                <div>
                                    <button onClick={showAirMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    </div>
                            </div>

                        </div>

                    </div>




                    <div className='relative'>

                        {calculatorMessage && (
                            <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-90 z-40'> </div>
                        )}

                        {calculatorMessage && (
                            <div className='fixed inset-0 w-full h-screen flex items-center justify-center z-50'>
                                <CalculatorMessage hideCalculatorMessage={hideCalculatorMessage} />

                            </div>
                        )}

                        <div className='grid grid-cols-2 my-10'>

                            <img className='lg:my-16 xl:my-16 lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./calculator.png' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">

                                <h1 className='font-bold text-sm md:text-lg lg:text-xl xl:text-xl'>Calculator App</h1>
                                <p className='hidden md:text-sm lg:text-base lg:block'>I have created a stylish and functional calculator
                                    using Next.js and Tailwind CSS. It features a clean and responsive design, making it easy to perform
                                    basic calculations on any device. This project demonstrates my skills in combining modern frameworks
                                    to build interactive and visually appealing web applications.</p>

                                <div>
                                    <button onClick={showCalculatorMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    </div>
                            </div>

                        </div>

                    </div>

                    <div className='relative'>

                        {toDoListMessage && (
                            <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-90 z-40'> </div>
                        )}

                        {toDoListMessage && (
                            <div className='fixed inset-0 w-full h-screen flex items-center justify-center z-50'>
                                <ToDoListMessage hideToDoListMessage={hideToDoListMessage} />

                            </div>
                        )}

                        <div className='grid grid-cols-2 my-10'>

                            <img className='lg:my-3 xl:my-11 lg:w-96 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./todolist.png' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">

                                <h1 className='font-bold text-sm md:text-lg lg:text-xl xl:text-xl'>To Do List App</h1>
                                <p className='hidden md:text-sm lg:text-base lg:block'>I Developed a To-Do List app using HTML, CSS, and JavaScript. This app allows users to easily add, edit, and delete tasks, helping them stay organized and productive. With a simple and intuitive design, it ensures a smooth user experience while managing daily tasks efficiently.</p>

                                <div>
                                    <button onClick={showToDoListMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div >

        </>
    )
}

export default Projects