import { useReveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import NetworkCanvas from './NetworkCanvas'
import { projects } from '../data'

function ProjectRow({ project }) {
  return (
    <div className="proj-row reveal grid grid-cols-[40px_1fr] sm:grid-cols-[56px_1fr] lg:grid-cols-[64px_1fr_auto] items-center gap-4 sm:gap-6 lg:gap-10 py-6 sm:py-7 lg:py-8 border-b border-white/5 cursor-none relative overflow-hidden group">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: 'linear-gradient(90deg,rgba(99,202,255,0.04),rgba(167,139,250,0.03),transparent)' }} />
      <div className="font-mono-dm text-[0.62rem] sm:text-[0.68rem] text-muted tracking-[0.12em] relative z-[1]">{project.num}</div>
      <div className="relative z-[1] min-w-0">
        <div
          className="font-display leading-none tracking-[0.02em] transition-colors duration-250 group-hover:text-cyan truncate"
          style={{ fontSize: 'clamp(1.4rem,3.5vw,3.2rem)' }}
        >
          {project.name}
        </div>
        <div className="flex gap-1.5 sm:gap-2 mt-1.5 sm:mt-2 flex-wrap">
          {project.tags.map(t => (
            <span key={t} className="font-mono-dm text-[0.55rem] sm:text-[0.6rem] text-muted2 border border-white/5 px-1.5 sm:px-2 py-0.5">{t}</span>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0 relative z-[1]">
        <span className="font-mono-dm text-[0.62rem] text-violet tracking-[0.1em] uppercase">{project.type}</span>
        <a href={project.demoUrl} className="w-10 h-10 border border-white/5 rounded-full flex items-center justify-center text-muted2 transition-all duration-300 group-hover:border-cyan group-hover:text-cyan group-hover:rotate-[-45deg] no-underline text-base">↗</a>
      </div>
    </div>
  )
}

function FeaturedProject({ project }) {
  return (
    <div className="feat mt-10 sm:mt-14 lg:mt-16 border border-white/5 grid grid-cols-1 lg:grid-cols-2 overflow-hidden transition-colors duration-300 hover:border-[rgba(99,202,255,0.15)] reveal">
      <div className="bg-panel min-h-[220px] sm:min-h-[280px] lg:min-h-[360px] relative flex items-center justify-center overflow-hidden">
        <NetworkCanvas />
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 font-mono-dm text-[0.58rem] sm:text-[0.62rem] text-muted tracking-[0.08em] px-2.5 sm:px-3 py-1 sm:py-1.5 border border-white/5 bg-[rgba(3,5,10,0.7)] backdrop-blur-sm z-[1]">
          interactive — network visualization
        </div>
      </div>
      <div className="p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
        <div className="font-mono-dm text-[0.6rem] sm:text-[0.63rem] text-gold tracking-[0.12em] uppercase mb-4 sm:mb-5">★ Featured Project</div>
        <div className="font-display leading-none mb-3 sm:mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>{project.name}</div>
        <p className="font-mono-dm text-[0.72rem] sm:text-[0.78rem] text-muted2 leading-7 sm:leading-8 mb-5 sm:mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {project.stack.map(t => (
            <span key={t} className="font-mono-dm text-[0.58rem] sm:text-[0.62rem] text-cyan2 border border-[rgba(0,255,224,0.2)] px-2 sm:px-3 py-0.5">{t}</span>
          ))}
        </div>
        <div className="flex gap-4 sm:gap-5">
          <a href={project.demoUrl} className="font-mono-dm text-[0.72rem] sm:text-[0.75rem] text-ink hover:text-cyan transition-colors no-underline">↗ Live Demo</a>
          <a href={project.githubUrl} className="font-mono-dm text-[0.72rem] sm:text-[0.75rem] text-muted2 hover:text-cyan transition-colors no-underline">⌥ GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useReveal()
  const featured = projects.find(p => p.featured)

  return (
    <section id="projects" ref={sectionRef} className="relative z-[1] px-5 sm:px-10 lg:px-20 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[rgba(3,5,10,0.78)] z-0 pointer-events-none" />
      <div className="relative z-[1]">
        <SectionLabel>03 — Work</SectionLabel>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-0">
          <h2 className="font-display leading-[0.92] reveal" style={{ fontSize: 'clamp(2.2rem,6vw,6.5rem)' }}>
            SELECTED<br /><span className="text-ghost">PROJECTS.</span>
          </h2>
          <p className="font-mono-dm text-[0.75rem] sm:text-[0.8rem] text-muted2 leading-7 sm:leading-8 max-w-[260px] reveal">
            Things I've built — from idea to production.
          </p>
        </div>
        <div>{projects.map(p => <ProjectRow key={p.num} project={p} />)}</div>
        {featured && <FeaturedProject project={featured} />}
      </div>
    </section>
  )
}