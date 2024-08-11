"use client";
import React, { useEffect } from 'react';
import 'animate.css';
import Swal from 'sweetalert2';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2d5bd823-cef7-4d68-aaba-8d8f659f86e1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const data = await res.json();
            if (data.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    useEffect(() => {
        const WOW = require('wowjs').WOW;
        const wow = new WOW({
            offset: 100,
            mobile: true,
            live: true
        });
        wow.init();
    }, []);
 
    return (
        <>
        
        <div id='contact' className='w-full'>
            <div className='text-center mt-12 lg:mt-16 xl:mt-16'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold'>
                    Get in <span className='text-sky-600'>Touch</span>
                </h1>
                <h1 className='text-sky-600 mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
                    ____
                </h1>
            </div>

            <div className='bg-black bg-opacity-85 rounded-2xl w-auto mx-10 mt-5 pb-4 lg:pb-6'>
                <form className='wow animate__animated animate__zoomIn' onSubmit={onSubmit}>
                    <div className='p-4 flex flex-col gap-4 md:flex-row lg:flex-row lg:px-14 lg:py-8 lg:gap-20'>
                        <div className='flex flex-col gap-4'>
                            <input 
                                type='text' 
                                placeholder='Name' required name='name'
                                className='p-2 w-full lg:w-[31rem] bg-white text-white bg-opacity-15'
                            />
                            <input 
                                type='text' 
                                placeholder='Email' required name='email'
                                className='p-2 w-full lg:w-[31rem] bg-white text-white bg-opacity-15'
                            />
                            <input 
                                type='number' 
                                placeholder='Number' required name='number'
                                className='p-2 w-full lg:w-[31rem] bg-white text-white bg-opacity-15'
                            />
                            <input 
                                type='text' 
                                placeholder='Subject' required name='subject'
                                className='p-2 w-full lg:w-[31rem] bg-white text-white bg-opacity-15'
                            />
                        </div>

                        <textarea 
                            placeholder='Message' required name='message'
                            className='bg-white text-white bg-opacity-15 p-4' 
                            rows={6} 
                            cols={60}
                        ></textarea>
                    </div>

                    <div className='flex justify-center'>
                        <button className='w-36 h-12 bg-white bg-opacity-15 text-white hover:bg-black hover:bg-opacity-25 rounded'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Contact;
