import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import { personal } from '../data'

export default function Contact() {
  const sectionRef = useReveal()

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-[2] px-6 sm:px-12 lg:px-20 py-28 overflow-hidden text-center"
    >
      {/* Fully opaque */}
      <div className="absolute inset-0 bg-bg1 z-0" />

      {/* Ghost background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-ghost-cyan pointer-events-none select-none whitespace-nowrap z-[1]"
        style={{ fontSize: 'clamp(6rem,18vw,20rem)' }}
        aria-hidden
      >
        HI
      </div>

      <div className="relative z-[2] max-w-2xl mx-auto">
        {/* Label centred */}
        <div className="flex justify-center mb-6 reveal">
          <div className="sec-label" style={{ maxWidth: 220 }}>
            <span className="font-mono-dm text-[0.68rem] text-cyan tracking-[0.2em] uppercase">
              06 — Contact
            </span>
          </div>
        </div>

        <h2
          className="font-display leading-[0.88] mb-6 reveal"
          style={{ fontSize: 'clamp(3.5rem,10vw,10rem)' }}
        >
          LET'S<br />
          <span className="text-cyan" style={{ textShadow: '0 0 60px rgba(99,202,255,0.4)' }}>
            TALK.
          </span>
        </h2>

        <p className="font-mono-dm text-[0.8rem] text-muted2 leading-8 mb-12 max-w-[400px] mx-auto reveal">
          I'm actively seeking full-time roles and exciting projects. Don't hesitate — my inbox is always open and I respond within 24 hours.
        </p>

        <a
          href={`mailto:${personal.email}`}
          className="inline-block font-mono-dm text-ink uppercase no-underline tracking-[0.04em] px-12 py-5 border border-[rgba(99,202,255,0.15)] transition-all duration-300 mb-12 reveal hover:bg-[rgba(99,202,255,0.07)] hover:text-cyan hover:shadow-[0_0_50px_rgba(99,202,255,0.12)]"
          style={{ fontSize: 'clamp(0.8rem,2.2vw,1.3rem)' }}
        >
          {personal.email}
        </a>

        
        <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 flex-wrap reveal">
          {[
            { label: 'GitHub',   href: personal.social.github   },
            { label: 'LinkedIn', href: personal.social.linkedin  },
            { label: 'Twitter',  href: personal.social.twitter   },
            { label: 'Resume ↓', href: personal.social.resume    },
          ].map(s => (
            <a key={s.label} href={s.href}
              className="font-mono-dm text-[0.62rem] sm:text-[0.68rem] tracking-[0.08em] uppercase px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 border border-white/5 text-muted2 no-underline transition-all duration-250 hover:border-cyan hover:text-cyan hover:bg-[rgba(99,202,255,0.04)]"
            >{s.label}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
