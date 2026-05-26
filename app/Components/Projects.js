"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const Projects = () => {
    const [isClient, setIsClient] = useState(false);
    const [imageErrors, setImageErrors] = useState({});

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') {
            AOS.init({ offset: 20, duration: 1000 });
        }
    }, []);

    const handleImageError = (projectId) => {
        setImageErrors(prev => ({ ...prev, [projectId]: true }));
    };

    const projects = [
        {
            id: 1,
            category: 'ecommerce',
            title: 'Shopify Plus Designers',
            tech: 'Shopify, E-Commerce',
            image: './shopify-plus-designer.webp',
            link: 'https://shopifyplusdesigners.com/',
            description: 'A professional design and development studio specializing in custom Shopify Plus solutions, marketing integrations, and scalable e-commerce stores.'
        },
        {
            id: 2,
            category: 'marketing',
            title: 'Grow Online Presence',
            tech: 'Digital Marketing, IT Services',
            image: './gap.webp',
            link: 'https://growonlinepresence.com/',
            description: 'Professional IT services and digital solutions designed to help businesses operate smarter, scale faster, and dominate their competition online.'
        },
        {
            id: 3,
            category: 'marketing',
            title: 'Dynamic Woodworking',
            tech: 'Woodworking, Web Design',
            image: './dynamic-woodworking.webp',
            link: 'https://dynamicwoodworking.com/',
            description: 'For over 30 years, transforming homes across the Twin Cities Metro with exceptional woodworking, custom cabinets, countertops, and fireplace surrounds.'
        },
        {
            id: 4,
            category: 'ecommerce',
            title: 'MuSolf\'s Flooring',
            tech: 'E-Commerce, Sustainable Products',
            image: './musolfs.webp',
            link: 'https://musolfs.com/',
            description: 'Offering sustainable flooring collections in a wide range of materials and wood finishes.'
        },
        {
            id: 5,
            category: 'web',
            title: 'MCSO Doctors',
            tech: 'Healthcare, Web Development',
            image: './mcso.webp',
            link: 'https://www.mcsodoctors.com/',
            description: 'Premier urological care provider in Chicago offering superior treatment and compassionate care.'
        },
        {
            id: 6,
            category: 'frontend',
            title: 'Max Restaurant',
            tech: 'HTML, CSS, JavaScript',
            image: './max-restaurent.webp', // Save the thumbnail as this name
            link: 'https://demoxml.com/html/restaurant/index.html',
            description: 'A beautifully designed restaurant website with menu displays, reservation system, and event showcase for an authentic dining experience.'
        },
        {
            id: 7,
            category: 'frontend',
            title: 'Elegencia',
            tech: 'React.js, Modern UI',
            image: './elegencia.webp', // Save the thumbnail as this name
            link: 'https://elegencia-react-ejev.vercel.app/',
            description: 'An elegant Royale Restaurant React JS template featuring a sophisticated design, menu exploration, and seamless user experience for fine dining establishments.'
        },
        {
            id: 8,
            category: 'ecommerce',
            title: 'Dinevera',
            tech: 'Webflow, E-Commerce',
            image: './dinevera.webp', // Save the thumbnail as this name
            link: 'https://dinevera.webflow.io/',
            description: 'A Webflow ecommerce website template for restaurants and food businesses with online ordering, delivery zones, and multi-location support.'
        },
        {
            id: 9,
            category: 'ecommerce',
            title: 'Toad&Co',
            tech: 'Sustainable Fashion, E-Commerce',
            image: './toadandoco.webp', // Save the thumbnail as this name
            link: 'https://www.toadandco.com/',
            description: 'Sustainable, organic, and eco-friendly clothing brand since 1996, offering built-to-last apparel that is kind to the planet and rooted in community.'
        },
        {
            id: 10,
            category: 'web',
            title: 'Laser and Me',
            tech: 'Medical Spa, Healthcare',
            image: './laser-and-me.webp', // Save the thumbnail as this name
            link: 'https://laserandme.com/',
            description: 'A full-service medical spa in Midtown Manhattan offering painless laser hair removal, skin rejuvenation, acne scar treatments, and Botox for every skin type.'
        },
        {
            id: 11,
            category: 'web',
            title: 'Chaletô',
            tech: 'Property Management, Real Estate',
            image: './chaleto.webp', // Save the thumbnail as this name
            link: 'https://www.chaleto.ca/',
            description: 'Quebec-based chalet rental management service helping property owners maximize profitability with professional photography, dynamic pricing, and full-service guest management.'
        },
        {
            id: 12,
            category: 'web',
            title: 'S&P Real Estate',
            tech: 'Real Estate, Luxury Properties',
            image: './s-and-p.webp',
            link: 'https://sprec.com/',
            description: 'International real estate boutique specializing in branded residences, masterplanned communities, destination resorts, and urban super prime real estate developments.'
        },
        {
            id: 13,
            category: 'web',
            title: 'Icon Villas',
            tech: 'Luxury Rentals, Travel',
            image: './iconVillas.webp',
            link: 'https://iconvillas.com/',
            description: 'Curated selection of private, hand-picked luxury villas throughout South Africa with breathtaking views, quality finishes, and personalized hospitality experiences.'
        },
        {
            id: 14,
            category: 'web',
            title: 'DI Jones',
            tech: 'Real Estate, Property',
            image: './dijones.webp',
            link: 'https://www.dijones.com.au/',
            description: 'Australian real estate agency offering property sales, management, and expert market insights for buyers and sellers across New South Wales.'
        },
        {
            id: 15,
            category: 'web',
            title: 'Ripcony',
            tech: 'Real Estate, Commercial',
            image: './ripcony.webp',
            link: 'https://www.ripcony.com/',
            description: 'Professional real estate services specializing in commercial and residential property solutions with market expertise.'
        },
        {
            id: 16,
            category: 'ecommerce',
            title: 'Rejuvenate Skincare Studio',
            tech: 'Skincare, E-Commerce',
            image: './rejuvenates.webp',
            link: 'https://rejuvenateskincarestudio.com/',
            description: 'Thoughtfully curated skincare studio offering facials, professional treatments, and clean beauty products to support barrier health and deliver visible results.'
        },
        {
            id: 17,
            category: 'web',
            title: 'Maryam Hair & Beauty',
            tech: 'Salon, Beauty',
            image: './maryam-hair-beauty.webp',
            link: 'https://maryamhairandbeauty.co.uk/',
            description: "London's premier ladies-only salon offering professional hair styling, beauty treatments, and personalized services in a comfortable, private environment."
        },
        {
            id: 18,
            category: 'ecommerce',
            title: 'Regis Salons',
            tech: 'Hair Salon, E-Commerce',
            image: './regis.webp',
            link: 'https://regissalons.co.uk/',
            description: 'Luxury hair salons offering professional haircuts, colouring services, styling products, and tools with an online shop for premium hair care brands.'
        },

        // --- NEW PET CARE PROJECT ---
        {
            id: 19,
            category: 'web',
            title: 'Buckaroo Buddies Pet Care',
            tech: 'Pet Services, Local Business',
            image: './buckaroo-buddies.webp',
            link: 'https://www.buckaroobuddiespetcare.com/',
            description: "San Antonio's trusted pet care service offering quality pet sitting, first aid certified team, and dependable care for your furry sidekicks."
        },
        { id: 20, category: 'web', title: 'CrowdFunding Platform', tech: 'MERN Stack', image: './crowdFunding.png', link: 'https://crowd-funding-rose.vercel.app/home' },
        { id: 21, category: 'web', title: 'E-commerce Website', tech: 'MERN Stack', image: './ecommerceWebsite.png', link: 'https://mern-ecommerce-peach-gamma.vercel.app/home' },
        { id: 22, category: 'frontend', title: 'Restaurant Website', tech: 'HTML/CSS/JS', image: './restaurent2.jpg', link: '#' },
        { id: 23, category: 'web', title: 'Employee Management', tech: 'MERN Stack', image: './employeeManagement.png', link: '#' },

    ];

    if (!isClient) {
        return (
            <section className='w-full bg-black bg-opacity-95 py-12'>
                <div className='text-center mt-2 lg:mt-4 xl:mt-4 pt-12 lg:pt-16 xl:pt-16'>
                    <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                        My <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Latest Work</span>
                    </h1>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className='w-full bg-black bg-opacity-95'>
            <div className='text-center mt-2 lg:mt-4 xl:mt-4 pt-12 lg:pt-16 xl:pt-16'>
                <h1 className='text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                    My <span className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent'>Latest Work</span>
                </h1>
                <h1 className='bg-gradient-to-r from-[#d062a0] to-[#5c0bed] bg-clip-text text-transparent mt-[-17px] sm:mt-[-25px] lg:mt-[-30px] xl:mt-[-31px] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl rounded'>
                    ____
                </h1>
                <p className='text-gray-400 mt-4 max-w-2xl mx-auto px-4 text-sm sm:text-base'>
                    When it comes to creating customized websites and digital solutions, I deliver excellence with creative methodology
                </p>
            </div>

            {/* Projects Grid - Larger Thumbnails */}
            <div className='w-auto mx-2 sm:mx-5 md:mx-10 lg:mx-20 xl:mx-20 mt-5 lg:mt-10 xl:mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className='group bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/10 hover:border-[#d062a0]/50 transition-all duration-500 overflow-hidden hover:scale-[1.02]'
                            data-aos="flip-left"
                            data-aos-delay={index * 100}
                        >
                            {/* Larger aspect ratio container - 16:9 for bigger thumbnails */}
                            <div className='relative w-full pt-[56.25%] overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900'>
                                {!imageErrors[project.id] ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='absolute top-0 left-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110'
                                        onError={() => handleImageError(project.id)}
                                    />
                                ) : (
                                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900'>
                                        <div className='text-center'>
                                            <div className='text-6xl mb-2'>🖼️</div>
                                            <p className='text-gray-500 text-sm'>{project.title}</p>
                                        </div>
                                    </div>
                                )}
                                {/* Overlay gradient on hover */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                            </div>
                            <div className='p-6'>
                                <h3 className='text-2xl font-bold text-white mb-2 group-hover:text-[#d062a0] transition-colors duration-300'>{project.title}</h3>
                                <p className='text-gray-400 text-base mb-4'>{project.tech}</p>
                                {project.link !== '#' ? (
                                    <Link href={project.link} target="_blank">
                                        <button className='text-[#d062a0] hover:text-white transition-colors duration-300 flex items-center gap-2 group-hover:gap-4 text-base font-medium'>
                                            View Project →
                                        </button>
                                    </Link>
                                ) : (
                                    <button className='text-gray-500 cursor-not-allowed flex items-center gap-2'>
                                        Coming Soon →
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;