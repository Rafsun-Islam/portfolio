import { skillCategories } from "../data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skill System"
          title="A stack built for real product work."
        >
          These are the tools and fundamentals I use to build interfaces, app
          flows, backend features, and database-driven projects. I am still
          learning every day, but this stack gives me a solid foundation to
          contribute as a junior software engineer.
        </SectionHeading>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className="glass-card group relative overflow-hidden rounded-[2rem] p-6 transition-colors duration-200 hover:border-cyan/45"
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan/10 blur-3xl transition-colors group-hover:bg-cyan/20" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/30 bg-cyan/10 font-mono text-sm font-semibold text-cyan">
                    {category.code}
                  </span>

                  <span className="font-mono text-xs font-medium text-muted">
                    MODULE / {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-base">
                  {category.title}
                </h3>

                <p className="mt-4 min-h-[112px] leading-7 text-soft">
                  {category.description}
                </p>

                <div className="mt-6 space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between rounded-2xl border border-border bg-white/[0.045] px-4 py-3"
                    >
                      <span className="text-sm font-medium text-soft">
                        {skill}
                      </span>

                      <span className="h-2 w-2 rounded-full bg-cyan" />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
