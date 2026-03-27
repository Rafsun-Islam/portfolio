import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import { experiences } from '../data'

export default function Experience() {
  const [active, setActive] = useState(0)
  const sectionRef = useReveal()
  const exp = experiences[active]

  return (
    <section id="experience" ref={sectionRef} className="relative z-[2] px-5 sm:px-10 lg:px-20 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-bg1 z-0" />
      <div className="relative z-[1]">
        <SectionLabel>04 — Journey</SectionLabel>
        <h2 className="font-display leading-[0.92] mb-10 sm:mb-14 lg:mb-16 reveal" style={{ fontSize: 'clamp(2.2rem,6vw,6.5rem)' }}>
          EXPERIENCE<br /><span className="text-ghost">&amp; EDUCATION</span>
        </h2>
        <div className="flex flex-col lg:grid lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr] gap-8 lg:gap-16 xl:gap-20">
          <div className="flex lg:flex-col gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 reveal-l">
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActive(i)}
                className={`exp-tab font-mono-dm text-[0.62rem] sm:text-[0.68rem] lg:text-[0.7rem] tracking-[0.05em] uppercase px-3 sm:px-4 lg:px-5 py-3 sm:py-4 lg:py-5 border-b-2 lg:border-b-0 lg:border-l-2 text-left transition-all duration-250 cursor-none flex flex-col gap-0.5 whitespace-nowrap flex-shrink-0 ${
                  active === i
                    ? 'text-cyan border-cyan bg-[rgba(99,202,255,0.04)]'
                    : 'text-muted2 border-white/5 hover:text-ink hover:border-[rgba(99,202,255,0.15)]'
                }`}
              >
                <span className="font-semibold">{e.role.length > 20 ? e.role.slice(0,20)+'…' : e.role}</span>
                <span className="text-[0.55rem] sm:text-[0.58rem] text-muted normal-case tracking-normal">{e.tabDate}</span>
              </button>
            ))}
          </div>
          <div className="reveal-r">
            <div className="font-display leading-none mb-2 sm:mb-3" style={{ fontSize: 'clamp(1.8rem,4vw,3.5rem)' }}>
              {exp.role}
            </div>
            <div className="font-mono-dm text-[0.72rem] sm:text-[0.78rem] text-cyan mb-5 sm:mb-6 tracking-[0.04em]">
              {exp.company} · {exp.date}
            </div>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {exp.bullets.map((b, i) => (
                <li key={i} className="font-mono-dm text-[0.7rem] sm:text-[0.76rem] text-muted2 leading-6 sm:leading-7 pl-5 sm:pl-6 relative">
                  <span className="absolute left-0 text-cyan">▸</span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
              {exp.tags.map(t => (
                <span key={t} className="font-mono-dm text-[0.58rem] sm:text-[0.62rem] text-violet border border-[rgba(167,139,250,0.2)] px-2.5 sm:px-3 py-0.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}