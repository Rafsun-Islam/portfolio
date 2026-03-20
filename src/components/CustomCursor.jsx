import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
  if (isTouchDevice) return null
  
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    // initialise ring to centre so it doesn't flash from 0,0
    pos.current.rx = window.innerWidth  / 2
    pos.current.ry = window.innerHeight / 2

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const interactables = 'a, button, .proj-row, .sk-card, .exp-tab, .sk-tab, .feat'
    const addHover  = () => document.body.classList.add('hovering')
    const rmHover   = () => document.body.classList.remove('hovering')

    // delegate hover via body-level listeners
    document.body.addEventListener('mouseover',  (e) => { if (e.target.closest(interactables)) addHover() })
    document.body.addEventListener('mouseout',   (e) => { if (e.target.closest(interactables)) rmHover() })

    const tick = () => {
      const { mx, my } = pos.current
      let { rx, ry }   = pos.current

      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`
        dotRef.current.style.top  = `${my}px`
      }

      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      pos.current.rx = rx
      pos.current.ry = ry

      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top  = `${ry}px`
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen transition-[width,height] duration-[250ms]"
        style={{ background: '#63caff', top: 0, left: 0 }}
        id="cursor-dot"
      />
      {/* ring */}
      <div
        ref={ringRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 border border-[rgba(99,202,255,0.5)] transition-[width,height,border-color] duration-[400ms]"
        style={{ top: 0, left: 0 }}
        id="cursor-ring"
      />
      <style>{`
        body.hovering #cursor-dot  { width:14px; height:14px; background:#a78bfa; }
        body.hovering #cursor-ring { width:56px;  height:56px;  border-color:rgba(167,139,250,0.6); }
      `}</style>
    </>
  )
}
