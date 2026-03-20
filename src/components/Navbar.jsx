import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { navLinks, personal } from '../data'

export default function Navbar() {
  const scrolled = useScrolled(50)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-8 md:px-20 py-5 transition-all duration-400 ${
        scrolled ? 'bg-[rgba(3,5,10,0.92)] backdrop-blur-2xl border-b border-white/5' : ''
      }`}
    >
      {/* Logo */}
      <a href="#hero" className="flex items-center gap-2 font-mono-dm text-xs text-cyan tracking-[0.12em] no-underline">
        <span
          className="w-[7px] h-[7px] rounded-full bg-cyan2 animate-pulse-dot"
          style={{ flexShrink: 0 }}
        />
        {personal.name.replaceAll(' ', '').toLowerCase()}.live
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="nav-link">{l.label}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-block font-mono-dm text-xs tracking-[0.1em] uppercase px-6 py-2.5 bg-cyan text-bg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(99,202,255,0.3)]"
      >
        Hire Me →
      </a>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 cursor-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-cyan transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-px bg-muted2 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-cyan transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(3,5,10,0.97)] backdrop-blur-2xl border-b border-white/5 flex flex-col items-center gap-6 py-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono-dm text-xs text-muted2 uppercase tracking-widest hover:text-cyan transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-mono-dm text-xs tracking-widest uppercase px-6 py-2.5 bg-cyan text-bg"
          >
            Hire Me →
          </a>
        </div>
      )}
    </nav>
  )
}
