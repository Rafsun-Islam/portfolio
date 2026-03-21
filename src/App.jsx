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

export default function App() {
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