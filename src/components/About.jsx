import { useReveal } from "../hooks/useReveal";
import SectionLabel from "./SectionLabel";
import { personal } from "../data";

function AboutCard() {
  return (
    <div className="relative mt-8 lg:mt-0">
      <div className="bg-panel border border-white/5 p-6 sm:p-8 relative overflow-hidden">
        <div
          className="absolute -top-14 -right-14 w-40 h-40 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle,rgba(99,202,255,0.1),transparent 70%)",
          }}
        />
        <div className="w-full aspect-[0.9] bg-gradient-to-br from-[#0d1424] to-[#121d33] border border-[rgba(99,202,255,0.15)] flex items-center justify-center mb-5 sm:mb-6 relative overflow-hidden">
          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-cyan z-10" />
          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-cyan z-10" />
          <img
            src="/photo.png"
            alt={personal.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div
          className="font-display mb-1"
          style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
        >
          {personal.name}
        </div>
        <div className="font-mono-dm text-[0.65rem] sm:text-[0.7rem] text-cyan2 tracking-[0.08em]">
          {personal.role} · {personal.degree}
        </div>
      </div>
      <div className="absolute -right-3 sm:-right-4 top-8 bg-bg2 border border-[rgba(99,202,255,0.15)] px-3 sm:px-4 py-2.5 sm:py-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <div className="font-mono-dm text-[0.58rem] sm:text-[0.63rem] text-muted2">
          $ status
        </div>
        <div className="font-mono-dm text-[0.58rem] sm:text-[0.63rem] text-cyan2">
          → actively_hiring
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useReveal();
  const facts = [
    { k: "Location", v: personal.location, green: false },
    { k: "Degree", v: personal.degree, green: false },
    { k: "Status", v: `● ${personal.availability}`, green: true },
    { k: "Focus", v: personal.focus, green: false },
    { k: "Languages", v: personal.languages, green: false },
    { k: "Interests", v: personal.interests, green: false },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-[1] px-5 sm:px-10 lg:px-20 py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[rgba(3,5,10,0.80)] z-0 pointer-events-none" />
      <div className="relative z-[1]">
        <SectionLabel>05 — About</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 xl:gap-24 items-center mt-4">
          <div className="reveal-l">
            <h2
              className="font-display leading-[1.05] mb-6 sm:mb-8"
              style={{ fontSize: "clamp(1.8rem,4vw,4.5rem)" }}
            >
              I build things that <span className="text-cyan">matter</span> —
              and I do it with <span className="text-cyan">care.</span>
            </h2>
            <p className="font-mono-dm text-[0.75rem] sm:text-[0.8rem] text-muted2 leading-7 sm:leading-8 mb-8 sm:mb-10">
              {personal.about}
            </p>
            <div
              className="grid grid-cols-2 border border-white/5"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {facts.map((f) => (
                <div
                  key={f.k}
                  className="px-4 sm:px-5 py-4 sm:py-5 border-b border-r border-white/5"
                  style={{ background: "rgba(3,5,10,0.7)" }}
                >
                  <div className="font-mono-dm text-[0.55rem] sm:text-[0.6rem] text-muted tracking-[0.12em] uppercase mb-1">
                    {f.k}
                  </div>
                  <div
                    className={`text-[0.8rem] sm:text-[0.88rem] font-semibold leading-tight ${f.green ? "text-cyan2" : "text-ink"}`}
                  >
                    {f.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-r">
            <AboutCard />
          </div>
        </div>
      </div>
    </section>
  );
}
