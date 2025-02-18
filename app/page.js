import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Why from './Components/Why'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Bannerr from './Components/Bannerr'

const page = () => {
  return (
    <>
    <Header />
    <Bannerr />
    <About />
    <Skills />
    <Projects />
    <Why />
    <Contact />
    <Footer />

    </>
  )
}

export default page