import { useEffect, useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { navLinks, personal } from '../data'

export default function Navbar() {
  const scrolled = useScrolled(50)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const offset = 140

      let current = '#hero'

      for (const id of sectionIds) {
        const section = document.querySelector(id)
        if (!section) continue

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollY + offset >= sectionTop && scrollY + offset < sectionTop + sectionHeight) {
          current = id
          break
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        current = sectionIds[sectionIds.length - 1] || '#hero'
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[500] transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(3,5,10,0.92)] backdrop-blur-2xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-4 sm:py-5">
        {/* Logo */}
        <a
          href="#hero"
          className="flex min-w-0 items-center gap-2 font-mono-dm text-[10px] sm:text-xs text-cyan tracking-[0.1em] sm:tracking-[0.12em] no-underline"
        >
          <span className="h-[6px] w-[6px] sm:h-[7px] sm:w-[7px] shrink-0 rounded-full bg-cyan2 animate-pulse-dot" />
          <span className="truncate">
            {personal.name.replaceAll(' ', '').toLowerCase()}.live
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10 list-none">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href

            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative whitespace-nowrap font-mono-dm text-xs uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-cyan' : 'text-muted2 hover:text-cyan'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 -bottom-2 h-px bg-cyan transition-all duration-300 ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-block shrink-0 font-mono-dm text-[10px] xl:text-xs tracking-[0.08em] xl:tracking-[0.1em] uppercase px-4 xl:px-6 py-2.5 bg-cyan text-bg transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(99,202,255,0.3)]"
        >
          Hire Me →
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex shrink-0 flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-cyan transition-all duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-muted2 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-cyan transition-all duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-b border-white/5 bg-[rgba(3,5,10,0.97)] backdrop-blur-2xl transition-all duration-300 ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-4 py-6 sm:px-6 sm:py-8">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href

            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`w-full text-center font-mono-dm text-xs uppercase tracking-widest transition-colors py-2 ${
                  isActive ? 'text-cyan' : 'text-muted2 hover:text-cyan'
                }`}
              >
                {l.label}
              </a>
            )
          })}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full max-w-[220px] text-center font-mono-dm text-xs tracking-widest uppercase px-6 py-3 bg-cyan text-bg"
          >
            Hire Me →
          </a>
        </div>
      </div>
    </nav>
  )
}