import React from 'react'
import Header from '../Components/Header'
import Projects from '../Components/Projects'
import Footer from '../Components/Footer'
import Social from '../Components/Social'

const page = () => {
  return (
    <>
    <Header />
    <Projects />
    <div className='w-full bg-opacity-95 mt-24 md:mt-10' style={{ backgroundColor: '#06090b' }}>

      <div className='w-full h-10 lg:h-10 bg-sky-600 flex items-center text-white'>
        <h1 className='m-4 sm:m-9  md:m-9 lg:m-10 text-xs md:text-sm lg:text-lg flex-grow'>Get Connected with me on Social Networks</h1>
        <Social />
      </div>

      <div className='h-12 text-white flex justify-center items-center text-center'>
        <h1 className='text-xs lg:text-sm xl:text-sm '>©Copyright-2024 - Created by Hammad Ansari</h1>
      </div>

      </div>
    </>
  )
}

export default page