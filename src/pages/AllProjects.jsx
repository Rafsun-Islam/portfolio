import { useEffect } from "react";
import { projects, personal } from "../data";
import SpaceBackground from "../components/SpaceBackground";
import CustomCursor from "../components/CustomCursor";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-panel border border-white/5 p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:border-[rgba(99,202,255,0.2)] hover:-translate-y-1 group">
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
        style={{
          background: "linear-gradient(90deg,#63caff,#a78bfa)",
          transform: "scaleX(0)",
          transformOrigin: "left",
        }}
        ref={(el) => {
          if (el)
            el.parentElement.addEventListener(
              "mouseenter",
              () => (el.style.transform = "scaleX(1)"),
            );
        }}
      />

      {/* number + type */}
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono-dm text-[0.62rem] text-muted tracking-[0.15em]">
          {project.num}
        </span>
        <span className="font-mono-dm text-[0.6rem] text-violet tracking-[0.1em] uppercase border border-[rgba(167,139,250,0.2)] px-2 py-0.5">
          {project.type}
        </span>
      </div>

      {/* title */}
      <h3
        className="font-display leading-none mb-3 transition-colors duration-250 group-hover:text-cyan"
        style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)" }}
      >
        {project.name}
      </h3>

      {/* description */}
      <p className="font-mono-dm text-[0.72rem] text-muted2 leading-7 mb-5">
        {project.description}
      </p>

      {/* tags */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono-dm text-[0.58rem] text-muted2 border border-white/5 px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* links */}
      <div className="flex gap-3 mt-auto flex-wrap">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono-dm text-[0.68rem] text-muted2 border border-white/5 px-3 py-1.5 transition-all duration-200 hover:border-cyan hover:text-cyan no-underline"
        >
          <GithubIcon /> GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono-dm text-[0.68rem] text-muted2 border border-white/5 px-3 py-1.5 transition-all duration-200 hover:border-cyan2 hover:text-cyan2 no-underline"
        >
          <LinkIcon /> Live Demo
        </a>
      </div>
    </div>
  );
}

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `All Projects — ${personal.name}`;
  }, []);

  return (
    <div
      style={{
        background: "#03050a",
        minHeight: "100vh",
        color: "#e8f0fe",
        fontFamily: "Outfit, sans-serif",
      }}
    >
      <SpaceBackground />
      <CustomCursor />

      {/* overlay */}
      <div
        className="fixed inset-0 bg-[rgba(3,5,10,0.75)] pointer-events-none"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-[1] px-5 sm:px-10 lg:px-20 py-10 sm:py-16">
        {/* Back button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 font-mono-dm text-[0.7rem] text-muted2 tracking-[0.1em] uppercase no-underline transition-colors duration-200 hover:text-cyan mb-10 sm:mb-14"
        >
          ← Back to Portfolio
        </a>

        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-cyan" />
            <span className="font-mono-dm text-[0.68rem] text-cyan tracking-[0.2em] uppercase">
              All Work
            </span>
          </div>
          <h1
            className="font-display leading-[0.92] mb-4"
            style={{ fontSize: "clamp(3rem,8vw,8rem)" }}
          >
            ALL
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.12)",
              }}
            >
              PROJECTS.
            </span>
          </h1>
          <p className="font-mono-dm text-[0.78rem] text-muted2 leading-8 max-w-lg">
            Every project I've built — side projects, internship work, open
            source contributions and more.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="font-mono-dm text-[0.65rem] text-muted">
            {projects.length} projects · {personal.name}
          </div>
          <a
            href="/"
            className="font-mono-dm text-[0.65rem] text-muted2 no-underline hover:text-cyan transition-colors tracking-widest uppercase"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
