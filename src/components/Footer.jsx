import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="relative z-[2] bg-bg px-6 sm:px-20 py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
      <div className="font-mono-dm text-[0.67rem] text-muted text-center sm:text-left">
        Designed &amp; Developed by{' '}
        <strong className="text-cyan font-normal">{personal.name}</strong> · 2025
      </div>
      <div className="font-mono-dm text-[0.65rem] text-muted">
        Built with React · Tailwind · Vite
      </div>
    </footer>
  )
}
