export default function Loader({ fading = false }) {
  return (
    <div
      className={`fixed inset-0 z-[999] grid place-items-center bg-ink transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-2xl border border-cyan/40 bg-cyan/10 shadow-[0_0_20px_rgba(94,234,212,0.35)] animate-pulse" />
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-cyan">
          Loading
        </p>
      </div>
    </div>
  );
}
