import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import SectionLabel from "./SectionLabel";
import NetworkCanvas from "./NetworkCanvas";
import { projects } from "../data";

// GitHub SVG icon
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

// External link icon
function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-3.5 h-3.5"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectRow({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="reveal border-b border-white/5 relative overflow-hidden cursor-none"
      onClick={() => setExpanded(!expanded)}
    >
      {/* hover tint */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: 'linear-gradient(90deg,rgba(99,202,255,0.04),rgba(167,139,250,0.03),transparent)' }}
      />

      {/* Main row */}
      <div className="proj-row grid grid-cols-[36px_1fr_auto] sm:grid-cols-[56px_1fr_auto] lg:grid-cols-[64px_1fr_auto] items-center gap-3 sm:gap-6 lg:gap-10 py-5 sm:py-7 lg:py-8 relative z-[1]">

        <div className="font-mono-dm text-[0.62rem] sm:text-[0.68rem] text-muted tracking-[0.12em]">
          {project.num}
        </div>

        <div className="min-w-0">
          <div
            className={`font-display leading-none tracking-[0.02em] transition-colors duration-250 truncate ${expanded ? 'text-cyan' : 'hover:text-cyan'}`}
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

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 relative z-[1]">
          {/* Desktop type label */}
          <span className="hidden lg:block font-mono-dm text-[0.62rem] text-violet tracking-[0.1em] uppercase">{project.type}</span>

          {/* GitHub */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono-dm text-[0.6rem] text-muted2 border border-white/5 px-2.5 py-1.5 transition-all duration-200 hover:border-cyan hover:text-cyan no-underline"
            onClick={e => e.stopPropagation()}
          >
            <GithubIcon /> <span className="hidden xs:block">GitHub</span>
          </a>

          {/* Demo */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono-dm text-[0.6rem] text-muted2 border border-white/5 px-2.5 py-1.5 transition-all duration-200 hover:border-cyan2 hover:text-cyan2 no-underline"
            onClick={e => e.stopPropagation()}
          >
            <LinkIcon /> <span className="hidden xs:block">Demo</span>
          </a>

          {/* Expand toggle arrow */}
          <div
            className="w-8 h-8 border border-white/5 rounded-full flex items-center justify-center text-muted2 transition-all duration-300 flex-shrink-0"
            style={{
              color: expanded ? '#63caff' : '',
              borderColor: expanded ? 'rgba(99,202,255,0.3)' : '',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ↓
          </div>
        </div>
      </div>

      {/* Expandable description panel */}
      <div
        className="overflow-hidden transition-all duration-500 relative z-[1]"
        style={{ maxHeight: expanded ? '300px' : '0px' }}
      >
        <div className="pb-6 sm:pb-8 px-0 grid grid-cols-1 lg:grid-cols-[64px_1fr_auto] gap-0 lg:gap-10">
          {/* spacer for number column on desktop */}
          <div className="hidden lg:block" />

          <div className="space-y-4">
            <p className="font-mono-dm text-[0.72rem] sm:text-[0.78rem] text-muted2 leading-7 sm:leading-8">
              {project.description}
            </p>

            {/* Stack tags */}
            {project.stack && (
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map(t => (
                  <span key={t} className="font-mono-dm text-[0.6rem] text-cyan2 border border-[rgba(0,255,224,0.2)] px-2.5 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
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
        <div className="font-mono-dm text-[0.6rem] sm:text-[0.63rem] text-gold tracking-[0.12em] uppercase mb-4 sm:mb-5">
          ★ Featured Project
        </div>
        <div
          className="font-display leading-none mb-3 sm:mb-4"
          style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
        >
          {project.name}
        </div>
        <p className="font-mono-dm text-[0.72rem] sm:text-[0.78rem] text-muted2 leading-7 sm:leading-8 mb-5 sm:mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
          {project.stack.map((t) => (
            <span
              key={t}
              className="font-mono-dm text-[0.58rem] sm:text-[0.62rem] text-cyan2 border border-[rgba(0,255,224,0.2)] px-2 sm:px-3 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 sm:gap-4 flex-wrap">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono-dm text-[0.72rem] sm:text-[0.75rem] text-ink hover:text-cyan transition-colors no-underline"
          >
            <LinkIcon /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono-dm text-[0.72rem] sm:text-[0.75rem] text-muted2 hover:text-cyan transition-colors no-underline"
          >
            <GithubIcon /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useReveal();
  const featured = projects.find((p) => p.featured);
  // show only first 4 on homepage
  const displayed = projects.slice(0, 4);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-[1] px-5 sm:px-10 lg:px-20 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[rgba(3,5,10,0.78)] z-0 pointer-events-none" />

      <div className="relative z-[1]">
        <SectionLabel>03 — Work</SectionLabel>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-6 mb-0">
          <h2
            className="font-display leading-[0.92] reveal"
            style={{ fontSize: "clamp(2.2rem,6vw,6.5rem)" }}
          >
            SELECTED
            <br />
            <span className="text-ghost">PROJECTS</span>
          </h2>
          <p className="font-mono-dm text-[0.75rem] sm:text-[0.8rem] text-muted2 leading-7 sm:leading-8 max-w-[260px] reveal">
            Things I've built — from idea to production.
          </p>
        </div>

        <div>
          {displayed.map((p) => (
            <ProjectRow key={p.num} project={p} />
          ))}
        </div>

        {featured && <FeaturedProject project={featured} />}

        {/* Show All Projects button */}
        <div className="flex justify-center mt-12 sm:mt-16 reveal">
          <a
            href="/projects"
            className="group flex items-center gap-3 font-mono-dm text-[0.72rem] sm:text-[0.78rem] tracking-[0.1em] uppercase px-8 sm:px-10 py-3.5 sm:py-4 border border-[rgba(99,202,255,0.3)] text-muted2 no-underline transition-all duration-300 hover:border-cyan hover:text-cyan hover:bg-[rgba(99,202,255,0.04)] hover:-translate-y-1"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
