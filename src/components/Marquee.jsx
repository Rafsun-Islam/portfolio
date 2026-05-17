import { techStack } from "../data";

export default function Marquee() {
  const items = [...techStack, ...techStack];

  return (
    <div className="overflow-hidden border-y border-border bg-white/[0.035] py-4">
      <div className="flex w-max animate-marquee gap-8 pr-8">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
