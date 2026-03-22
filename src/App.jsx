import { useState, useEffect } from 'react'
import SpaceBackground  from './components/SpaceBackground'
import CustomCursor     from './components/CustomCursor'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import Marquee          from './components/Marquee'
import Skills           from './components/Skills'
import Projects         from './components/Projects'
import Experience       from './components/Experience'
import About            from './components/About'
import Contact          from './components/Contact'
import Footer           from './components/Footer'
import WhatsAppButton   from './components/WhatsAppButton'
import AllProjects      from './pages/AllProjects'

function HomePage() {
  return (
    <div style={{ position: 'relative', zIndex: 1, background: 'transparent' }}>
      <SpaceBackground />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPage(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  // intercept link clicks for /projects
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (href === '/projects') {
        e.preventDefault()
        window.history.pushState(null, '', '/projects')
        setPage('/projects')
        window.scrollTo(0, 0)
      }
      if (href === '/') {
        e.preventDefault()
        window.history.pushState(null, '', '/')
        setPage('/')
        window.scrollTo(0, 0)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  if (page === '/projects') return <AllProjects />
  return <HomePage />
}