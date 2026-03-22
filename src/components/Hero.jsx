import { personal } from '../data'

function CodeWindow() {
  return (
    <div className="relative w-full max-w-[500px]">
      <div
        className="bg-bg2 border border-[rgba(99,202,255,0.15)] rounded-2xl w-full overflow-hidden"
        style={{
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(99,202,255,0.06), 0 0 60px rgba(99,202,255,0.05)',
        }}
      >
        {/* Title bar */}
        <div className="bg-panel px-5 py-3.5 flex items-center gap-2 border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="font-mono-dm text-[0.68rem] text-muted ml-2 tracking-[0.06em]">developer.js</span>
        </div>
        {/* Code */}
        <div className="p-6 font-mono-dm text-[0.78rem] leading-8">
          <div><span className="text-[#c678dd]">const</span> <span className="text-cyan">developer</span> = {'{'}</div>
          <div className="pl-6"><span className="text-cyan2">name</span>: <span className="text-[#98c379]">"{personal.name}"</span>,</div>
          <div className="pl-6"><span className="text-cyan2">role</span>: <span className="text-[#98c379]">"Software Engineer"</span>,</div>
          <div className="pl-6"><span className="text-cyan2">stack</span>: [<span className="text-[#98c379]">"React"</span>, <span className="text-[#98c379]">"Node"</span>, <span className="text-[#98c379]">"Python"</span>],</div>
          <div className="pl-6"><span className="text-cyan2">available</span>: <span className="text-[#d19a66]">true</span>,</div>
          <div className="pl-6"><span className="text-cyan2">passion</span>: <span className="text-[#98c379]">"clean code"</span>,</div>
          <div className="pl-6"><span className="text-[#61afef]">sayHello</span>: <span className="text-[#c678dd]">function</span>() {'{'}</div>
          <div className="pl-12"><span className="text-[#c678dd]">return</span> <span className="text-[#98c379]">"Let's build something great!"</span>;</div>
          <div className="pl-6">{'}'}</div>
          <div>{'}'}</div>
          <div className="mt-2" />
          <div><span className="text-[#4a5568] italic">// Currently seeking opportunities...</span></div>
          <div>
            <span className="text-cyan">developer</span>.<span className="text-[#61afef]">sayHello</span>();
            <span className="inline-block w-2 h-3.5 bg-cyan ml-0.5 align-middle animate-blink" />
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-4 right-6 bg-panel border border-[rgba(99,202,255,0.15)] px-4 py-2.5 flex items-center gap-2 rounded-md shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <span className="w-[7px] h-[7px] rounded-full bg-cyan2 animate-pulse-dot flex-shrink-0" />
        <span className="font-mono-dm text-[0.63rem] text-muted2 tracking-[0.06em]">
          <strong className="text-cyan2 font-normal">open_to_work</strong> · respond in 24h
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative z-[1] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-6 sm:px-12 lg:px-20 pt-24 pb-16 overflow-hidden"
    >
      {/* Ghost background text */}
      <div
        className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 font-display text-ghost-cyan select-none pointer-events-none whitespace-nowrap leading-none z-0"
        style={{ fontSize: 'clamp(10rem,24vw,28rem)' }}
        aria-hidden
      >ENGINEER
      </div>

      {/* LEFT */}
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-[1]">
        {/* Eyebrow */}
        <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8 hero-anim animate-rise animate-delay-300">
          <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg,transparent,#63caff)' }} />
          <span className="font-mono-dm text-[0.72rem] text-cyan2 tracking-[0.2em] uppercase">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan2 mr-2 align-middle animate-pulse-dot" />
            Available for work ·
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display leading-[0.88] hero-anim animate-rise animate-delay-500 relative z-[1]"
          style={{ fontSize: 'clamp(3.5rem,8.5vw,10rem)' }}
        >
          Rafsun
          <br />
          <span className="text-outline">Islam</span>
          <span className="block pl-10 text-cyan">Taskin</span>
        </h1>

        {/* Sub */}
        <div className="mt-4 flex flex-col gap-6 z-[1] hero-anim animate-rise animate-delay-750">
          <p
            className="font-mono-dm text-[0.82rem] leading-8 text-muted2 max-w-[420px]"
            dangerouslySetInnerHTML={{
              __html: personal.description.replace(/<em>/g, '<em class="not-italic text-cyan">'),
            }}
          />
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="#projects"
              className="font-mono-dm text-[0.78rem] tracking-[0.1em] uppercase px-9 py-3.5 text-bg font-medium transition-transform duration-250 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(99,202,255,0.3)]"
              style={{ background: 'linear-gradient(135deg,#63caff,#00ffe0)' }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="font-mono-dm text-[0.78rem] tracking-[0.1em] uppercase px-9 py-3.5 border border-[rgba(99,202,255,0.3)] text-muted2 transition-all duration-250 hover:border-cyan hover:text-cyan hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT — Code Window */}
      <div className="flex items-center justify-center hero-anim animate-rise animate-delay-500 relative z-[1] pb-6 lg:pb-0">
        <CodeWindow />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-[1] hero-anim animate-rise animate-delay-1300 hidden lg:flex">
        <span className="font-mono-dm text-[0.62rem] text-muted tracking-[0.18em] uppercase">Scroll</span>
        <div
          className="w-px h-12 animate-scroll-bar"
          style={{ background: 'linear-gradient(#63caff,transparent)' }}
        />
      </div>
    </section>
  )
}
