import { projects } from "../data";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project }) {
  const demoDisabled = !project.demoUrl || project.demoUrl === null;

  return (
    <article className="glass-card rounded-[1.75rem] p-5 transition duration-200 hover:border-cyan/35 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="kicker">{project.num}</span>

        {project.featured ? (
          <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-medium text-cyan">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.035em] text-base sm:text-3xl">
        {project.name}
      </h3>

      <p className="mt-2 text-sm font-medium text-muted">{project.type}</p>

      <p className="mt-5 leading-7 text-soft">{project.description}</p>

      {project.impact ? (
        <p className="mt-4 rounded-2xl border border-border bg-white/[0.035] p-4 text-sm leading-6 text-soft">
          <span className="font-semibold text-cyan">Impact: </span>
          {project.impact}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary py-2.5"
        >
          Code
        </a>

        <a
          href={demoDisabled ? project.githubUrl : project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-primary py-2.5"
        >
          {demoDisabled ? "Details" : "Live Preview"}
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that show practical engineering ability."
          >
            A focused collection of frontend, full-stack, desktop, and
            networking projects built to practice real user flows and technical
            fundamentals
          </SectionHeading>

          <a href="/projects" className="btn-secondary w-fit">
            View All Projects
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
