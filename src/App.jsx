import SpaceBackground from './components/SpaceBackground'
import CustomCursor    from './components/CustomCursor'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Marquee         from './components/Marquee'
import Skills          from './components/Skills'
import Projects        from './components/Projects'
import Experience      from './components/Experience'
import About           from './components/About'
import Contact         from './components/Contact'
import Footer          from './components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed layers */}
      <SpaceBackground />
      <CustomCursor />

      {/* Page */}
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
    </>
  )
}
