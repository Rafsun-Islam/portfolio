import { techStack } from '../data'

export default function Marquee() {
  const items = [...techStack, ...techStack] // duplicate for seamless loop

  return (
    <div className="overflow-hidden border-t border-b border-white/5 py-2.5 bg-bg1 relative z-[2]">
      {/* solid bg block to cover stars */}
      <div className="absolute inset-0 bg-bg1 z-0" />
      <div className="relative z-[1] flex whitespace-nowrap animate-marquee">
        {items.map((tech, i) => (
          <div
            key={i}
            className="font-mono-dm text-[0.68rem] text-muted tracking-[0.15em] uppercase px-8 flex items-center gap-6 flex-shrink-0"
          >
            {tech}
            <span className="text-cyan">✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
