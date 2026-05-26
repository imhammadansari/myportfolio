"use client";
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(event.target);
        formData.append("access_key", "2d5bd823-cef7-4d68-aaba-8d8f659f86e1");
        const json = JSON.stringify(Object.fromEntries(formData));

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: json
            });
            const data = await res.json();
            if (data.success) {
                Swal.fire({ title: "Success!", text: "Message Sent Successfully!", icon: "success" });
                event.target.reset();
            } else {
                Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({ icon: "error", title: "Error", text: "Failed to send message!" });
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        AOS.init({ offset: 20, duration: 1000 });
    }, []);

    return (
        <section id="contact" className='py-20 bg-black'>
            <div className='container mx-auto px-4'>
                <div className='text-center mb-12' data-aos="fade-up">
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>
                        Let's <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Work Together</span>
                    </h2>
                    <div className='w-20 h-1 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] mx-auto rounded-full'></div>
                    <p className='text-gray-400 mt-4'>Briefs and queries excite me, let's make something enticing</p>
                </div>

                <div className='max-w-4xl mx-auto'>
                    <div className='grid md:grid-cols-2 gap-8 mb-8'>
                        <div className='space-y-4' data-aos="fade-right">
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#d062a0] to-[#5c0bed] flex items-center justify-center'>
                                    📞
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm'>Call Me</p>
                                    <p className='text-white'>+92-3282020955</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#d062a0] to-[#5c0bed] flex items-center justify-center'>
                                    ✉️
                                </div>
                                <div>
                                    <p className='text-gray-400 text-sm'>Email Me</p>
                                    <p className='text-white'>ansarihamad084@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={onSubmit} className='space-y-4' data-aos="fade-left">
                            <input type="text" name="name" placeholder="Your Name" required className='w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d062a0] transition-colors' />
                            <input type="email" name="email" placeholder="Your Email" required className='w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d062a0] transition-colors' />
                            <textarea name="message" placeholder="Your Message" rows="4" required className='w-full px-4 py-3 bg-gray-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d062a0] transition-colors'></textarea>
                            <button type="submit" disabled={isSubmitting} className='w-full py-3 bg-gradient-to-r from-[#d062a0] to-[#5c0bed] text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 disabled:opacity-50'>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;