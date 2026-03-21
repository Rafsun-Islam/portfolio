/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      'xs':  '380px',
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        mono:    ['"DM Mono"',    'monospace'],
        body:    ['"Outfit"',     'sans-serif'],
      },
      colors: {
        bg:     '#03050a',
        bg1:    '#060a12',
        bg2:    '#0a0f1e',
        panel:  '#0d1424',
        cyan:   '#63caff',
        cyan2:  '#00ffe0',
        violet: '#a78bfa',
        pink:   '#f472b6',
        gold:   '#fbbf24',
        ink:    '#e8f0fe',
        muted:  '#4a5878',
        muted2: '#6b7fa3',
      },
      animation: {
        'pulse-dot':  'pulse-dot 2s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
        'rise':       'rise 0.8s cubic-bezier(.23,1,.32,1) forwards',
        'scroll-bar': 'scroll-bar 2s ease-in-out infinite',
        'marquee':    'marquee 28s linear infinite',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(0,255,224,0.5)' },
          '50%':     { boxShadow: '0 0 0 7px rgba(0,255,224,0)'  },
        },
        'blink': {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
        'rise': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        'scroll-bar': {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top'    },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top'    },
          '51%':  { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        'marquee': {
          from: { transform: 'translateX(0)'    },
          to:   { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}