import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data";

export default function AllProjects() {
  return (
    <>
      <Navbar />

      <main className="pt-32">
        <section className="section-pad pt-10">
          <div className="container-page">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Project Archive"
                title="A complete view of my work."
              >
                These projects show frontend, full-stack, desktop application,
                and networking fundamentals.
              </SectionHeading>

              <a href="/" className="btn-secondary w-fit">
                Back Home
              </a>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((project) => {
                const demoDisabled =
                  !project.demoUrl || project.demoUrl === "#";

                return (
                  <article
                    key={project.name}
                    className="glass-card rounded-[2rem] p-6 transition -1 hover:border-cyan/45"
                  >
                    <p className="font-mono text-xs font-bold text-cyan">
                      {project.num}
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-base">
                      {project.name}
                    </h2>

                    <p className="mt-2 text-sm font-semibold text-muted">
                      {project.type}
                    </p>

                    <p className="mt-5 leading-7 text-soft">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary py-2.5"
                      >
                        Code
                      </a>

                      <a
                        href={
                          demoDisabled ? project.githubUrl : project.demoUrl
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary py-2.5"
                      >
                        {demoDisabled ? "Details" : "Live"}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
