import { personal, proofs } from "../data";
import SectionHeading from "./SectionHeading";

export default function Proof() {
  return (
    <section id="proof" className="section-pad">
      <div className="container-page">
        <div className="glass-card overflow-hidden rounded-[2.5rem]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-border bg-white/[0.035] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <SectionHeading
                eyebrow="Proof of Work"
                title="A few highlights from my journey so far."
              >
                I have built my foundation through academic work, hands-on
                projects, and consistent learning. These highlights reflect the
                discipline, curiosity, and problem-solving mindset I hope to
                bring to a software engineering team.
              </SectionHeading>

              <div className="mt-8 rounded-[2rem] border border-cyan/30 bg-cyan/10 p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyan">
                  Education
                </p>
                <p className="mt-3 text-2xl font-black text-base">
                  {personal.education}
                </p>
                <p className="mt-2 text-soft">
                  CGPA: {personal.cgpa} · Graduation: {personal.graduation}
                </p>
              </div>
            </div>

            <div className="grid gap-4 p-6 sm:p-8">
              {proofs.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[2rem] border border-border bg-white/[0.045] p-6"
                >
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-muted">
                    {item.title}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-cyan">
                    {item.value}
                  </h3>

                  <p className="mt-3 leading-7 text-soft">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
