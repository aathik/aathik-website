import React from 'react';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import {Helmet} from "react-helmet";



const App = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aathik</title>
        <link rel="canonical" href="https://aathik.github.io/aathik-website/" />
      </Helmet>
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
