import { useState, useEffect } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { navLinks, personal } from '../data'

export default function Navbar() {
  const scrolled = useScrolled(50)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between
        px-5 sm:px-10 lg:px-20 py-4 sm:py-5 transition-all duration-300
        ${scrolled ? 'bg-[rgba(3,5,10,0.95)] backdrop-blur-2xl border-b border-white/5' : ''}`}
    >
      <a href="#hero" className="flex items-center gap-2 font-mono-dm text-[0.75rem] sm:text-[0.82rem] text-cyan tracking-[0.1em] no-underline z-10">
        <span className="w-[7px] h-[7px] rounded-full bg-cyan2 animate-pulse-dot flex-shrink-0" />
        {personal.name.split(' ')[0]}.dev
      </a>

      <ul className="hidden md:flex gap-6 lg:gap-10 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="nav-link text-[0.7rem] lg:text-[0.72rem]">{l.label}</a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="hidden md:inline-block font-mono-dm text-[0.7rem] lg:text-[0.72rem] tracking-[0.1em] uppercase px-4 lg:px-6 py-2 lg:py-2.5 bg-cyan text-bg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(99,202,255,0.3)]"
      >
        Hire Me →
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 relative z-10"
        aria-label="Toggle menu"
        style={{ cursor: 'none' }}
      >
        <span className={`block w-6 h-[1.5px] bg-cyan origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`block h-[1.5px] bg-muted2 transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-5'}`} />
        <span className={`block w-6 h-[1.5px] bg-cyan origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      <div
        className={`md:hidden fixed inset-0 flex flex-col items-center justify-center gap-6 sm:gap-8 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 9, background: 'rgba(3,5,10,0.98)', backdropFilter: 'blur(24px)' }}
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-[2rem] xs:text-[2.5rem] sm:text-[3rem] text-muted2 uppercase tracking-widest hover:text-cyan transition-colors duration-200 no-underline"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-4 font-mono-dm text-[0.75rem] tracking-[0.15em] uppercase px-8 py-3 bg-cyan text-bg no-underline"
        >
          Hire Me →
        </a>
      </div>
    </nav>
  )
}