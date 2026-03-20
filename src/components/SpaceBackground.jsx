import { useEffect, useRef } from 'react'

const STAR_COLORS = [
  '255,255,255', '200,230,255', '99,202,255', '255,240,220', '180,180,255',
]

function makeStars(n, speed) {
  return Array.from({ length: n }, () => ({
    x:            Math.random() * 3000,
    y:            Math.random() * 3000,
    r:            Math.random() * speed * 0.7 + 0.1,
    color:        STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    baseO:        Math.random() * 0.5 + 0.15,
    o:            0,
    twinkleSpeed: Math.random() * 0.03 + 0.005,
    twinklePhase: Math.random() * Math.PI * 2,
    vx:           (Math.random() - 0.5) * speed,
    vy:           (Math.random() - 0.5) * speed,
  }))
}

export default function SpaceBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let PW, PH, raf
    let t = 0, spawnTimer = 0
    let shooters = []

    const deepStars = makeStars(280, 0.04)
    const midStars  = makeStars(120, 0.08)
    const nearStars = makeStars(30,  0.15)
    const allStars  = [...deepStars, ...midStars, ...nearStars]
    allStars.forEach(s => (s.o = s.baseO))

    function resize() {
      PW = canvas.width  = window.innerWidth
      PH = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function spawnShooter() {
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5
      const speed = Math.random() * 10 + 8
      const len   = Math.random() * 180 + 80
      shooters.push({
        x: Math.random() * PW * 0.8,
        y: Math.random() * PH * 0.4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len, alpha: 0, life: 0,
        maxLife: Math.floor(len / speed) + 20,
      })
    }

    function drawStar(s) {
      s.twinklePhase += s.twinkleSpeed
      const tw = Math.sin(s.twinklePhase) * 0.35 + 0.65
      const o  = s.baseO * tw

      if (s.r > 0.9) {
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4)
        grd.addColorStop(0, `rgba(${s.color},${o * 0.5})`)
        grd.addColorStop(1, `rgba(${s.color},0)`)
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2)
        ctx.fillStyle = grd; ctx.fill()
      }
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${s.color},${o})`; ctx.fill()

      s.x += s.vx; s.y += s.vy
      if (s.x < 0) s.x = PW; if (s.x > PW) s.x = 0
      if (s.y < 0) s.y = PH; if (s.y > PH) s.y = 0
    }

    function drawNebula() {
      const clouds = [
        { x: PW * 0.15, y: PH * 0.2,  r: PW * 0.22, c: '99,202,255',   o: 0.028 },
        { x: PW * 0.85, y: PH * 0.75, r: PW * 0.25, c: '167,139,250',  o: 0.025 },
        { x: PW * 0.6,  y: PH * 0.1,  r: PW * 0.18, c: '0,255,224',    o: 0.018 },
        { x: PW * 0.1,  y: PH * 0.8,  r: PW * 0.2,  c: '244,114,182',  o: 0.014 },
      ]
      clouds.forEach(cl => {
        const g = ctx.createRadialGradient(cl.x, cl.y, 0, cl.x, cl.y, cl.r)
        g.addColorStop(0, `rgba(${cl.c},${cl.o})`)
        g.addColorStop(1, `rgba(${cl.c},0)`)
        ctx.beginPath(); ctx.arc(cl.x, cl.y, cl.r, 0, Math.PI * 2)
        ctx.fillStyle = g; ctx.fill()
      })
    }

    function loop() {
      t++
      ctx.clearRect(0, 0, PW, PH)
      drawNebula()
      allStars.forEach(drawStar)

      spawnTimer++
      if (spawnTimer > 90 + Math.random() * 120 && shooters.length < 6) {
        spawnShooter(); spawnTimer = 0
      }

      shooters = shooters.filter(sh => {
        sh.life++
        if (sh.life < 8)                       sh.alpha = sh.life / 8
        else if (sh.life > sh.maxLife - 10)    sh.alpha = Math.max(0, (sh.maxLife - sh.life) / 10)
        else                                    sh.alpha = 1

        const angle = Math.atan2(sh.vy, sh.vx)
        const x2 = sh.x - Math.cos(angle) * sh.len
        const y2 = sh.y - Math.sin(angle) * sh.len

        const grad = ctx.createLinearGradient(sh.x, sh.y, x2, y2)
        grad.addColorStop(0,    `rgba(255,255,255,${sh.alpha})`)
        grad.addColorStop(0.15, `rgba(180,230,255,${sh.alpha * 0.7})`)
        grad.addColorStop(1,    'rgba(99,202,255,0)')
        ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(x2, y2)
        ctx.strokeStyle = grad; ctx.lineWidth = 1.5; ctx.stroke()

        const hg = ctx.createRadialGradient(sh.x, sh.y, 0, sh.x, sh.y, 4)
        hg.addColorStop(0, `rgba(255,255,255,${sh.alpha})`)
        hg.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath(); ctx.arc(sh.x, sh.y, 4, 0, Math.PI * 2)
        ctx.fillStyle = hg; ctx.fill()

        sh.x += sh.vx; sh.y += sh.vy
        return sh.life < sh.maxLife && sh.x < PW + 200 && sh.y < PH + 200
      })

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  )
}
