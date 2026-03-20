export default function SectionLabel({ children }) {
  return (
    <div className="sec-label reveal">
      <span className="font-mono-dm text-[0.68rem] text-cyan tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  )
}
