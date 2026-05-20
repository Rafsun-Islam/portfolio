import { personal, techStack } from "../data";

function TerminalPanel() {
  return (
    <div className="glass-card flex h-full min-h-[430px] flex-col overflow-hidden rounded-[1.8rem] sm:min-h-[520px] sm:rounded-[2rem] lg:min-h-full">
      <div className="flex items-center justify-between border-b border-border bg-white/[0.045] px-4 py-3 sm:px-5 sm:py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan sm:h-3 sm:w-3" />
        </div>

        <p className="font-mono text-[0.68rem] text-muted sm:text-xs">
          rafsun@portfolio:~$
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-center space-y-4 bg-ink/50 p-4 font-mono text-xs leading-6 sm:p-5 sm:text-sm sm:leading-7">
        <div className="terminal-line terminal-delay-1">
          <span className="text-cyan">$</span>{" "}
          <span className="text-soft">whoami</span>
        </div>

        <div className="terminal-fade terminal-delay-2 rounded-2xl border border-border bg-white/[0.035] p-4">
          <p className="text-soft">
            <span className="text-cyan">name:</span> {personal.name}
          </p>
          <p className="text-soft">
            <span className="text-cyan">role:</span> {personal.role}
          </p>
          <p className="text-soft">
            <span className="text-cyan">location:</span> {personal.location}
          </p>
        </div>

        <div className="terminal-line terminal-delay-3">
          <span className="text-cyan">$</span>{" "}
          <span className="text-soft">cat skills.json</span>
        </div>

        <div className="terminal-fade terminal-delay-4 rounded-2xl border border-border bg-white/[0.035] p-4">
          <p className="text-soft">{"{"}</p>
          <p className="pl-4 text-soft">
            frontend: <span className="text-amber">["React", "Tailwind"]</span>,
          </p>
          <p className="pl-4 text-soft">
            mobile: <span className="text-amber">["Flutter", "Dart"]</span>,
          </p>
          <p className="pl-4 text-soft">
            backend:{" "}
            <span className="text-amber">["Node", "Python", "PHP"]</span>,
          </p>
          <p className="pl-4 text-soft">
            database: <span className="text-amber">["MySQL"]</span>
          </p>
          <p className="text-soft">{"}"}</p>
        </div>

        <div className="terminal-line terminal-delay-5">
          <span className="text-cyan">$</span>{" "}
          <span className="text-soft">npm run hire-ready</span>
        </div>

        <div className="terminal-fade terminal-delay-6">
          <p className="text-muted">Checking academic record...</p>
          <p className="text-muted">Loading projects...</p>
          <p className="text-muted">Preparing portfolio...</p>

          <p className="mt-2 text-cyan">
            Ready for software engineering opportunities
            <span className="terminal-cursor" />
          </p>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ label, value, tone = "text-cyan" }) {
  return (
    <div className="panel-card rounded-2xl p-4">
      <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <p className={`mt-2 text-base font-semibold ${tone}`}>{value}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[88svh] overflow-hidden pt-24 sm:min-h-[92svh] sm:pt-32 lg:min-h-screen lg:pt-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-24 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[100px] sm:h-[36rem] sm:w-[36rem]" />
      <div className="pointer-events-none absolute right-0 top-52 h-[20rem] w-[20rem] rounded-full bg-violet/10 blur-[100px] sm:h-[28rem] sm:w-[28rem]" />

      <div className="container-page relative z-10 pb-16 sm:pb-20">
        <div className="grid items-stretch gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6">
          <div className="glass-card flex h-full flex-col rounded-[1.8rem] p-5 sm:rounded-[2rem] sm:p-7 lg:p-8">
            <div className="mb-6 flex flex-col items-start gap-2 min-[900px]:flex-row min-[900px]:items-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-medium text-cyan sm:px-4 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-cyan" />
                {personal.status}
              </span>

              <span className="w-fit rounded-full border border-border bg-white/[0.045] px-3 py-2 text-xs font-medium text-soft sm:px-4 sm:text-sm">
                {personal.education}
              </span>
            </div>

            <p className="kicker">Engineering Dashboard</p>

            <h1 className="mt-4 max-w-3xl font-display text-[2rem] font-semibold leading-tight tracking-[-0.045em] text-base sm:text-4xl lg:text-5xl">
              Building clean software for real users.
            </h1>

            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-soft sm:text-lg">
              React, Flutter, backend APIs, and practical product engineering.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              I am {personal.name}, a CSE graduate from Dhaka, Bangladesh. I
              enjoy building polished interfaces, reliable features, and
              complete user flows.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>

              <a
                href={personal.social.resume}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Resume
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <StatusCard label="Strength" value="Clean UI + Logic" />
              <StatusCard
                label="Mindset"
                value="Fast Learner"
                tone="text-violet"
              />
              
            </div>
          </div>

          <TerminalPanel />
        </div>

        <div className="mt-5 glass-card overflow-hidden rounded-[1.7rem] p-4 sm:mt-6 sm:rounded-[2rem]">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
