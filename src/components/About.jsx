import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import { personal } from '../data'

function AboutCard() {
  return (
    <div className="relative">
      <div className="bg-panel border border-white/5 p-8 relative overflow-hidden">
        {/* corner glow */}
        <div
          className="absolute -top-16 -right-16 w-48 h-48 pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(99,202,255,0.1),transparent 70%)' }}
        />

        {/* Avatar box */}
        <div className="w-full aspect-[0.9] bg-gradient-to-br from-[#0d1424] to-[#121d33] border border-[rgba(99,202,255,0.15)] flex items-center justify-center mb-6 relative overflow-hidden">
          {/* grid lines */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(99,202,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,202,255,0.05) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* corner brackets */}
          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-cyan" />
          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-cyan" />
          {/* Initials */}
          <span className="font-display text-[5.5rem] text-cyan opacity-20 relative z-[1] select-none">
            {personal.initials}
          </span>
        </div>

        <div className="font-display text-3xl mb-1">{personal.name}</div>
        <div className="font-mono-dm text-[0.7rem] text-cyan2 tracking-[0.1em]">
          {personal.role} · {personal.degree}
        </div>
      </div>

      {/* Floating terminal badge */}
      <div className="absolute -right-4 top-10 bg-bg2 border border-[rgba(99,202,255,0.15)] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="font-mono-dm text-[0.63rem] text-muted2">$ status</div>
        <div className="font-mono-dm text-[0.63rem] text-cyan2">→ actively_hiring</div>
      </div>
    </div>
  )
}

export default function About() {
  const sectionRef = useReveal()

  const facts = [
    { k: 'Location',     v: personal.location,     green: false },
    { k: 'Degree',       v: personal.degree,        green: false },
    { k: 'Status',       v: `● ${personal.availability}`, green: true },
    { k: 'Focus',        v: personal.focus,         green: false },
    { k: 'Languages',    v: personal.languages,     green: false },
    { k: 'Interests',    v: personal.interests,     green: false },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-[1] px-6 sm:px-12 lg:px-20 py-28"
    >
      <div className="absolute inset-0 bg-[rgba(3,5,10,0.80)] z-0 pointer-events-none" />

      <div className="relative z-[1]">
        <SectionLabel>05 — About</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center mt-4">
          {/* Text side */}
          <div className="reveal-l">
            <h2
              className="font-display leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(2rem,4vw,4.5rem)' }}
            >
              {personal.aboutQuote.split('matter').map((part, i) =>
                i === 0
                  ? <span key={i}>{part}<span className="text-cyan">matter</span></span>
                  : <span key={i}>{part.replace('care.', '')}<span className="text-cyan">care.</span></span>
              )}
            </h2>

            <p className="font-mono-dm text-[0.8rem] text-muted2 leading-8 mb-10">
              {personal.about}
            </p>

            {/* Facts grid */}
            <div
              className="grid grid-cols-2 border border-white/5"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="px-5 py-5 border-b border-r border-white/5"
                  style={{ background: 'rgba(3,5,10,0.7)' }}
                >
                  <div className="font-mono-dm text-[0.6rem] text-muted tracking-[0.15em] uppercase mb-1">{f.k}</div>
                  <div className={`text-[0.88rem] font-semibold ${f.green ? 'text-cyan2' : 'text-ink'}`}>{f.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card side */}
          <div className="reveal-r">
            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  )
}
