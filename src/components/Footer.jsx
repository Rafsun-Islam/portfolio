import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="relative z-[2] bg-bg px-5 sm:px-10 lg:px-20 py-6 sm:py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-center sm:text-left">
      <div className="font-mono-dm text-[0.62rem] sm:text-[0.67rem] text-muted">
        Designed &amp; Developed by <strong className="text-cyan font-normal">{personal.name}</strong> · 2025
      </div>
      <div className="font-mono-dm text-[0.6rem] sm:text-[0.65rem] text-muted">
        React · Tailwind · Vite
      </div>
    </footer>
  )
}