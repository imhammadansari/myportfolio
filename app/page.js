import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Why from './Components/Why';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Bannerr from './Components/Bannerr';
import Services from './Components/Services';
import Achievements from './Components/Achievements';
import WebDevelopment from './Components/WebDevelopment';

export default function Home() {
  return (
    <>
      <Header />
      <Bannerr />
      <About />
      <Services />
      <Achievements />
      {/* <Skills /> */}
      <WebDevelopment />
      <Projects />
      <Why />
      <Contact />
      <Footer />
    </>
  );
}