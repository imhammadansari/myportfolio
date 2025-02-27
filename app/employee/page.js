import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const page = () => {
  return (
    <>
    <Header />
    <div className="w-full h-screen flex justify-center items-center bg-black">
            <video controls className="w-[90%] max-w-3xl rounded-lg">
                <source src="/employee-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

    <Footer />
        </>
  )
}

export default page