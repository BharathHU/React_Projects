import React from 'react'
import Navbar from './Portfolio/Navbar'
import Hero from './Portfolio/Hero'
import './App.css'
import About from './Portfolio/About'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects'
import Contact from './Portfolio/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
