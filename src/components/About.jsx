import { personal } from "../data";
import SectionHeading from "./SectionHeading";

const principles = [
  "Readable code before clever code",
  "Responsive UI with clear hierarchy",
  "Complete user flows, not half features",
  "Fast learning with ownership mindset",
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-violet/15 blur-3xl" />

          <div className="glass-card relative overflow-hidden rounded-[2rem] p-4">
            <img
              src="/photo.webp"
              alt={personal.name}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />

            <div className="p-4">
              <h3 className="text-2xl font-black text-base">{personal.name}</h3>
              <p className="mt-1 text-soft">
                {personal.role} · {personal.location}
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Me"
            title="I am trying to become the kind of engineer teams can trust."
          >
            {personal.about}
          </SectionHeading>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-border bg-white/[0.045] p-5 font-semibold text-soft"
              >
                <span className="mr-3 text-cyan">✦</span>
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              LinkedIn
            </a>

            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
