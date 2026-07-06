import React, { useEffect, useState } from 'react'
import Navbar from './Portfolio/Navbar'
import Hero from './Portfolio/Hero'
import './App.css'
import About from './Portfolio/About'
import Skills from './Portfolio/Skills'
import Projects from './Portfolio/Projects'
import Internships from './Portfolio/Internships'
import Contact from './Portfolio/Contact'

function App() {
  const [theme, setTheme] = useState('dark')
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)

    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [theme])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <div
        className="pointer-events-none fixed z-0 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl"
        style={{ left: cursor.x, top: cursor.y, transform: 'translate(-50%, -50%)' }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ambient-orb orb-one" />
        <div className="ambient-orb orb-two" />
        <div className="ambient-orb orb-three" />
      </div>

      <div className="relative z-10">
        <Navbar
          theme={theme}
          toggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        />
        <Hero theme={theme} />
        <About theme={theme} />
        <Internships theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </div>
    </div>
  )
}

export default App
