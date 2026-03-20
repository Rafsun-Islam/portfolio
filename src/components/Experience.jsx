import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import { experiences } from '../data'

export default function Experience() {
  const [active, setActive] = useState(0)
  const sectionRef = useReveal()
  const exp = experiences[active]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative z-[2] px-6 sm:px-12 lg:px-20 py-28"
    >
      {/* Fully opaque — no stars */}
      <div className="absolute inset-0 bg-bg1 z-0" />

      <div className="relative z-[1]">
        <SectionLabel>04 — Journey</SectionLabel>

        <h2
          className="font-display leading-[0.92] mb-16 reveal"
          style={{ fontSize: 'clamp(2.5rem,6vw,6.5rem)' }}
        >
          EXPERIENCE<br />
          <span className="text-ghost">&amp; EDUCATION.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 lg:gap-20">
          {/* Tab list */}
          <div className="flex md:flex-col gap-0 overflow-x-auto md:overflow-visible reveal-l">
            {experiences.map((e, i) => (
              <button
                key={e.id}
                onClick={() => setActive(i)}
                className={`exp-tab font-mono-dm text-[0.7rem] tracking-[0.06em] uppercase px-5 py-5 border-l-2 text-left transition-all duration-250 cursor-none flex flex-col gap-1 whitespace-nowrap ${
                  active === i
                    ? 'text-cyan border-cyan bg-[rgba(99,202,255,0.04)]'
                    : 'text-muted2 border-white/5 hover:text-ink hover:border-[rgba(99,202,255,0.15)]'
                }`}
              >
                <span>{e.role.length > 22 ? e.role.slice(0, 22) + '…' : e.role}</span>
                <span className="text-[0.58rem] text-muted normal-case tracking-normal">{e.tabDate}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="reveal-r">
            <div
              className="font-display leading-none mb-2"
              style={{ fontSize: 'clamp(2rem,4vw,3.5rem)' }}
            >
              {exp.role}
            </div>
            <div className="font-mono-dm text-[0.78rem] text-cyan mb-6 tracking-[0.05em]">
              {exp.company} · {exp.date}
            </div>

            <ul className="flex flex-col gap-4">
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  className="font-mono-dm text-[0.76rem] text-muted2 leading-7 pl-6 relative"
                >
                  <span className="absolute left-0 text-cyan">▸</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-8">
              {exp.tags.map(t => (
                <span
                  key={t}
                  className="font-mono-dm text-[0.62rem] text-violet border border-[rgba(167,139,250,0.2)] px-3 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
