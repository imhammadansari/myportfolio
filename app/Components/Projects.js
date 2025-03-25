
"use client";
import React, { useEffect, useRef, useState } from 'react';
import 'animate.css';
import RestaurentMessage from './RestaurentMessage';
import GymMessage from './GymMessage';
import QuizMessage from './QuizMessage';
import AirlineMessage from './AirlineMessage';
import EcommerceMessage from './EcommerceMessage';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CalculatorMessage from './CalculatorMessage';
import ToDoListMessage from './ToDoListMessage';
import ContractIQMessage from './ContractIQMessage';
import EmployeeManagementMessage from './EmployeeManagementMessage';
import Link from 'next/link';
import CrowdFundingMessage from './CrowdFundingMessage';

// ..

const Projects = () => {
    const [restaurentMessage, setRestaurentMessage] = useState(false);
    const [gymMessage, setGymMessage] = useState(false);
    const [quizMessage, setQuizMessage] = useState(false);
    const [airlineMessage, setAirlineMessage] = useState(false);
    const [ecommerceMessage, setEcommerceMessage] = useState(false);
    const [crowdFundingMessage, setcrowdFundingMessage] = useState(false);
    const [contractIQMessage, setContractIQMessage] = useState(false);
    const [employeeManagementMessage, setemployeeManagementMessage] = useState(false);
    const [calculatorMessage, setcalculatorMessage] = useState(false);
    const [toDoListMessage, settoDoListMessage] = useState(false);


    const showRestaurentMessage = () => setRestaurentMessage(!restaurentMessage);
    const hideMessage = () => setRestaurentMessage(false);
    const showGymMessage = () => setGymMessage(!gymMessage);
    const hideGymMessage = () => setGymMessage(false);
    const showQuizMessage = () => setQuizMessage(!quizMessage);
    const hideQuizMessage = () => setQuizMessage(false);
    const showAirMessage = () => setAirlineMessage(!airlineMessage);
    const hideAirMessage = () => setAirlineMessage(false);
    const showContractIQMessage = () => setContractIQMessage(!contractIQMessage);
    const hideContractIQMessage = () => setContractIQMessage(false);
    const showemployeeManagementMessage = () => setemployeeManagementMessage(!employeeManagementMessage);
    const hideemployeeManagementMessage = () => setemployeeManagementMessage(false);
    const showEcommerceMessage = () => setEcommerceMessage(!ecommerceMessage);
    const hideEcommerceMessage = () => setEcommerceMessage(false);
    const showCalculatorMessage = () => setcalculatorMessage(!calculatorMessage);
    const hideCalculatorMessage = () => setcalculatorMessage(false);
    const showCrowdFundingMessage = () => setcrowdFundingMessage(!calculatorMessage);
    const hideCrowdFundingMessage = () => setcrowdFundingMessage(false);

    useEffect(() => {
        AOS.init({
            offset: 20,
            duration: 1000,
            mirror: true,
            once: false, // Allow animations to trigger multiple times
        });
    }, []);

    return (
        <>
            <div className='w-full bg-black bg-opacity-95'>


                <div className='text-center mt-2 lg:mt-4 xl:mt-4 pt-12 lg:pt-16 xl:pt-16'>
                    <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                        Real-Time <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Projects</span>
                    </h1>
                    <h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
                        ____
                    </h1>
                </div>

                <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 mt-5 lg:mt-10 xl:mt-10'>
                    <div className='relative'>
                        {crowdFundingMessage && (
                            <div className="fixed inset-0 w-full h-screen bg-black opacity-90 z-40"> </div>
                        )}
                        {crowdFundingMessage && (
                            <div className="fixed inset-0 w-full h-screen flex justify-center items-center z-50">
                                <CrowdFundingMessage hideCrowdFundingMessage={hideCrowdFundingMessage} />
                            </div>
                        )}
                        <div className='flex flex-col md:grid md:grid-cols-2 items-center'>
                            <img className='w-80 sm:w-[35rem] md:w-96 xl:my-8 lg:my-8 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./crowdFunding.png' />
                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">
                                <h1 className='font-bold pt-2 md:pt-0 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl'>CrowdFunding Website</h1>
                                <p className='hidden md:text-sm text-white lg:text-sm pt-2 xl:text-sm lg:block'>CrowdFunding is a MERN
                                    stack-based funding platform designed to support students in need of financial assistance for
                                    their education. Students can create donation requests by sharing their academic details and funding
                                    needs, while donors can browse these requests and contribute securely. The platform includes an
                                    admin panel to manage student requests, donor activities, and payment processing, ensuring
                                    transparency and efficiency. This Platform connects generous donors with deserving students, making
                                    education accessible to all.</p>
                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={showCrowdFundingMessage}
                                        className='w-[5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden 
        hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
        bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded mt-2'
                                    >
                                        Read More
                                    </button>
                                </div>
                                <div className='flex justify-center gap-4 md:justify-start'>


                                    <button
                                        className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'
                                        onClick={() => {
                                            window.location.href = 'https://crowdfunding-5ttm.onrender.com/home';
                                        }}
                                    >
                                        Live Demo
                                    </button>

                                    <Link href="/crowdFunding">
                                        <button
                                            className='hidden lg:inline-block xl:inline-block lg:w-28 lg:h-10 lg:text-base xl:w-28 xl:h-10 xl:text-base hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
        text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'

                                        >
                                            Watch Online
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 mt-10 lg:mt-10 xl:mt-10'>
                    <div className='relative'>
                        {contractIQMessage && (
                            <div className="fixed inset-0 w-full h-screen bg-black opacity-90 z-40"> </div>
                        )}
                        {contractIQMessage && (
                            <div className="fixed inset-0 w-full h-screen flex justify-center items-center z-50">
                                <ContractIQMessage hideContractIQMessage={hideContractIQMessage} />
                            </div>
                        )}
                        <div className='flex flex-col md:grid md:grid-cols-2 items-center'>
                            <img className='w-80 sm:w-[35rem] md:w-96 xl:my-8 lg:my-8 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./contractIQ.png' />
                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">
                                <h1 className='font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl pt-2 md:pt-0'>ContractIQ Front-End Website</h1>
                                <p className='hidden md:text-sm text-white lg:text-sm xl:text-sm lg:block pt-2'>I developed a frontend
                                    project using React.js for my client, who requested a website named ContractIQ. The website
                                    provides valuable information and guidance about Ethereum smart contracts, offering users insights
                                    into their functionality and usage. The project showcases my skills in building user-friendly,
                                    responsive web applications using modern frontend technologies.</p>
                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={showContractIQMessage} className='w-[5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'>Read More</button>
                                    <button
                                        className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'
                                        onClick={() => {
                                            window.location.href = 'https://contract-iq-drab.vercel.app/home';
                                        }}
                                    >
                                        Live Demo
                                    </button>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 mt-10 lg:mt-10 xl:mt-10'>
                    <div className='relative'>
                        {employeeManagementMessage && (
                            <div className="fixed inset-0 w-full h-screen bg-black opacity-90 z-40"> </div>
                        )}
                        {employeeManagementMessage && (
                            <div className="fixed inset-0 w-full h-screen flex justify-center items-center z-50">
                                <EmployeeManagementMessage hideemployeeManagementMessage={hideemployeeManagementMessage} />
                            </div>
                        )}
                        <div className='flex flex-col md:grid md:grid-cols-2 items-center'>
                            <img className='w-80 sm:w-[35rem] md:w-96 xl:my-8 lg:my-8 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./employeeManagement.png' />
                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">
                                <h1 className='font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl pt-2 md:pt-0'>Employee Management Website</h1>
                                <p className='hidden md:text-sm text-white lg:text-sm xl:text-sm lg:block pt-2'>I developed an Employee
                                    Management System using the MERN stack, which allows secure login for both employees and admins, each
                                    with their personalized dashboards. Employees can apply for leave by specifying the leave type, days,
                                    and department, while also viewing their leave request history with statuses such as Pending,
                                    Approved, and Rejected. They can access and manage their personal profiles, including job details
                                    and contact information. Admins have the ability to register, update, or delete employee records,
                                    as well as manage departments. Additionally, admins can view and manage all employee leave
                                    requests, and they hold the authority to approve or reject leave requests.</p>
                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={showemployeeManagementMessage}
                                        className='w-[5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden 
        hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
        bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded mt-2'
                                    >
                                        Read More
                                    </button>
                                </div>
                                <div className='flex justify-center gap-4 md:justify-start'>


                                    <button
                                        className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'
                                        onClick={() => {
                                            window.location.href = 'https://employeemanagement-c46a.onrender.com/home';
                                        }}
                                    >
                                        Live Demo
                                    </button>

                                    <Link href="/ecommerce">
                                        <button
                                            className='hidden lg:inline-block xl:inline-block lg:w-28 lg:h-10 lg:text-base xl:w-28 xl:h-10 xl:text-base hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
        text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'

                                        >
                                            Watch Online
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
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
                        <div className='flex flex-col md:grid md:grid-cols-2 items-center'>
                            <img className='w-80 sm:w-[35rem] md:w-96 xl:my-8 lg:my-8 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./ecommerceWebsite.png' />
                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">
                                <h1 className='font-bold pt-2 md:pt-0 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl'>E-commmerce Website</h1>
                                <p className='hidden md:text-sm text-white lg:text-sm pt-2 xl:text-sm lg:block'>I developed a fully functional
                                    E-commerce website leveraging the MERN Stack (MongoDB, Express.js, React.js, Node.js). It contains a best
                                    user friendly interface and modern design. Users can create an account with secure login, explore all
                                    product categories, browse products in each category, add items to their cart, and proceed to checkout.
                                    Once the order is placed, they can see the details of the Pending orders. This project showcases a smooth
                                    and secure shopping experience from start to finish.</p>
                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={showEcommerceMessage}
                                        className='w-[5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden 
        hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
        bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded mt-2'
                                    >
                                        Read More
                                    </button>
                                </div>
                                <div className='flex justify-center gap-4 md:justify-start'>


                                    <button
                                        className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
    text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'
                                        onClick={() => {
                                            window.location.href = 'https://mern-ecommerce-rnup.onrender.com/home';
                                        }}
                                    >
                                        Live Demo
                                    </button>

                                    <Link href="/ecommerce">
                                        <button
                                            className='hidden lg:inline-block xl:inline-block lg:w-28 lg:h-10 lg:text-base xl:w-28 xl:h-10 xl:text-base hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
        text-white bg-gradient-to-r from-[#d062a0] to-[#5c0bed] rounded mt-2'

                                        >
                                            Watch Online
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 mt-5 lg:mt-10 xl:mt-10'>
                    {/* <div className='relative'>
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
                                <h1 className='font-bold text-white text-sm md:text-lg lg:text-xl xl:text-xl'>Gym Management Website</h1>
                                <p className='hidden md:text-sm text-white lg:text-base xl:text-base lg:block'>I developed a Gym Management Website using MERN Stack (MongoDB, Express.js, React.js, Node.js). The website offers a sleek and responsive design, enabling users to manage memberships, book classes, and track their fitness progress. It provides a seamless user experience with real-time updates and efficient data handling, aiming to enhance gym operations and member engagement.

                                </p>
                                <p className='font-bold hidden md:text-sm lg:text-base xl:text-base lg:block'>But, It is not completed yet, Working in progress</p>
                                <div>
                                    <button onClick={showGymMessage} className='w-[4.5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Read More</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600'>Live Demo</button>
                                    <button className='hidden lg:inline-block xl:inline-block lg:w-24 lg:h-10 lg:text-base xl:w-24 xl:h-10 xl:text-base bg-sky-600 text-white rounded mt-2 hover:bg-white hover:text-sky-600 mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-5'>Source</button>
                                </div>
                            </div>
                        </div>


                    </div> */}

                    <div className='text-center mt-12 lg:mt-16 xl:mt-24'>
                        <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                            Academic <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Projects</span>
                        </h1>
                        <h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
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
                        <div className="flex flex-col md:grid md:grid-cols-2 items-center my-10">
                            <img
                                className="lg:my-3 xl:my-9 w-80 sm:w-[35rem] md:w-96 rounded-xl transition-transform duration-500 hover:scale-110 " data-aos="flip-left"
                                src="./restaurent2.jpg"
                            />
                            <div className="px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center" data-aos="flip-right">
                                <h1 className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl pt-2 md:pt-0">Restaurent Website</h1>
                                <p className="hidden md:text-sm lg:text-sm text-white xl:text-sm pt-2 lg:block">
                                    I developed a restaurant website using HTML, CSS, and JavaScript. The site features a modern design with a welcoming homepage, detailed menu, and an image gallery showcasing the restaurant's dishes. The contact page provides location, hours, and a form for inquiries. The website aims to enhance the restaurant's online presence and attract more customers.
                                </p>
                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={showRestaurentMessage} className='w-[5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
     bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded mt-2'>Read More</button>

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


                        <div className='flex flex-col md:grid md:grid-cols-2 items-center my-10'>

                            <img className='w-80 sm:w-[35rem] md:w-96 rounded-xl transition-transform duration-500 hover:scale-110' data-aos="flip-left" src='./quiz.png' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">

                                <h1 className='font-bold text-sm text-white md:text-lg sm:text-base lg:text-xl xl:text-xl pt-2 md:pt-0'>Quiz Management App</h1>
                                <p className='hidden md:text-sm text-white lg:text-sm xl:text-sm lg:block pt-2'>I developed a Quiz Management App using Java with a GUI. The app allows users to create, manage,
                                    and take quizzes through an intuitive graphical interface. Key features include quiz creation, question management,
                                    and real-time scoring. The application aims to provide an efficient and user-friendly platform for both quiz administrators
                                    and participants.</p>

                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={showQuizMessage} className='w-[5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
     bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded mt-2'>Read More</button>
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


                        <div className='flex flex-col md:grid md:grid-cols-2 items-center mt-8 md:mt-20'>

                            <img className='w-80 sm:w-[35rem] md:w-96 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./airline.jpg' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">

                                <h1 className='font-bold text-white text-sm md:text-lg sm:text-base lg:text-xl xl:text-xl pt-2 md:pt-0'>Airline Management Website</h1>
                                <p className='hidden md:text-sm text-white lg:text-sm xl:text-sm pt-2 lg:block'>I developed an Airline Management Website using Java with a GUI. The website provides a
                                    user-friendly interface for managing airline operations, including booking flights, managing passenger information,
                                    and scheduling. It features real-time updates and efficient data management, aiming to streamline airline operations
                                    and improve customer service.</p>

                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={showAirMessage} className='w-[5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
     bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded mt-2'>Read More</button>
                                </div>
                            </div>

                        </div>

                    </div>




                    <div className='relative mt-8'>

                        {calculatorMessage && (
                            <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-90 z-40'> </div>
                        )}

                        {calculatorMessage && (
                            <div className='fixed inset-0 w-full h-screen flex items-center justify-center z-50'>
                                <CalculatorMessage hideCalculatorMessage={hideCalculatorMessage} />

                            </div>
                        )}

                        <div className='flex flex-col md:grid md:grid-cols-2 items-center mt-4'>

                            <img className='w-80 sm:w-[35rem] md:w-96 lg:my-16 xl:my-16 rounded-xl transition-transform duration-300 hover:scale-110' data-aos="flip-left" src='./calculator.png' />

                            <div className='px-4 sm:px-3 md:px-5 lg:px-0 xl:px-0 flex flex-col justify-center' data-aos="flip-right">

                                <h1 className='font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl pt-2 md:pt-0'>Calculator App</h1>
                                <p className='hidden md:text-sm text-white lg:text-sm pt-2 lg:block'>I have created a stylish and functional calculator
                                    using Next.js and Tailwind CSS. It features a clean and responsive design, making it easy to perform
                                    basic calculations on any device. This project demonstrates my skills in combining modern frameworks
                                    to build interactive and visually appealing web applications.</p>

                                <div className='flex justify-center md:justify-start'>
                                    <button onClick={showCalculatorMessage} className='w-[5rem] h-8 text-xs sm:w-[5rem] sm:text-sm md:w-[6rem] md:text-sm lg:hidden xl:hidden hover:bg-black hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#d062a0] hover:to-[#5c0bed] 
     bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded mt-2 '>Read More</button>
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