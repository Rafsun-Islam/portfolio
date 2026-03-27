import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import { skillCategories } from '../data'

function SkillCard({ skill }) {
  const cardRef = useRef(null)
  const fillRef = useRef(null)
  const [lit, setLit] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLit(true) },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (lit && fillRef.current) {
      fillRef.current.style.transform = `scaleX(${skill.width})`
    }
  }, [lit, skill.width])

  return (
    <div
      ref={cardRef}
      className="sk-card sk-card-line bg-panel border border-white/5 p-4 sm:p-5 lg:p-6 relative overflow-hidden transition-all duration-250 hover:border-[rgba(99,202,255,0.3)] hover:-translate-y-1 cursor-none"
    >
      <div className="text-xl sm:text-2xl mb-2 sm:mb-3">{skill.icon}</div>
      <div className="font-semibold text-[0.85rem] sm:text-[0.95rem] mb-1">{skill.name}</div>
      <div className="font-mono-dm text-[0.58rem] sm:text-[0.62rem] text-muted2 tracking-[0.05em] mb-3 sm:mb-4">{skill.level}</div>
      <div className="h-px bg-white/5 rounded-sm overflow-hidden">
        <div
          ref={fillRef}
          className="h-full rounded-sm transition-[transform] duration-[1100ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
          style={{ background: 'linear-gradient(90deg,#63caff,#00ffe0)', transform: 'scaleX(0)', transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState(0)
  const sectionRef = useReveal()

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative z-[1] px-5 sm:px-10 lg:px-20 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[rgba(6,10,18,0.82)] z-0 pointer-events-none" />
      <div className="relative z-[1]">
        <SectionLabel>02 — Expertise</SectionLabel>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
          <h2 className="font-display leading-[0.92] reveal" style={{ fontSize: 'clamp(2.2rem,6vw,6.5rem)' }}>
            WHAT I<br /><span className="text-ghost">KNOW</span>
          </h2>
          <p className="font-mono-dm text-[0.75rem] sm:text-[0.8rem] text-muted2 leading-7 sm:leading-8 max-w-full sm:max-w-[400px] reveal">
            Proficient across the full stack — from pixel-perfect UIs to robust backend infrastructure.
          </p>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-[180px_1fr] xl:grid-cols-[200px_1fr] gap-8 lg:gap-16 xl:gap-20 items-start">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 reveal-l">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActive(i)}
                className={`sk-tab font-mono-dm text-[0.65rem] sm:text-[0.7rem] lg:text-[0.73rem] tracking-[0.06em] uppercase px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-4 border-b-2 lg:border-b-0 lg:border-l-2 text-left whitespace-nowrap flex-shrink-0 transition-all duration-250 cursor-none ${
                  active === i
                    ? 'text-cyan border-cyan bg-[rgba(99,202,255,0.05)]'
                    : 'text-muted2 border-transparent hover:text-ink hover:border-[rgba(99,202,255,0.15)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 reveal-r w-full">
            {skillCategories[active].skills.map((sk) => (
              <SkillCard key={sk.name} skill={sk} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}