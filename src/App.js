import React from 'react';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
