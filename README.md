# Personal Portfolio — Rafsun Islam Taskin

> A modern, fully responsive developer portfolio built with **React**, **Tailwind CSS**, and **Vite**. Features a live space background with shooting stars, smooth scroll animations, custom cursor, and a clean dark aesthetic.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite)

---

## Features

- 🌌 **Animated space background** — deep star field with twinkling, shooting stars and nebula clouds
- 🖱️ **Custom cursor** — glowing dot with spring-following ring (disabled on touch devices)
- 🎞️ **Scroll animations** — staggered reveal effects on every section
- 📱 **Fully responsive** — optimized for all screen sizes from 380px to 2560px
- 🧭 **Smooth routing** — client-side navigation without React Router
- ⌨️ **Live code window** — animated syntax-highlighted code snippet in hero
- 📊 **Tabbed skills** — animated progress bars per skill category
- 💼 **Projects page** — dedicated `/projects` page with all work
- 📞 **WhatsApp button** — sticky floating button with tooltip
- 🎨 **Premium dark design** — Bebas Neue + DM Mono + Outfit font pairing

---

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx                        # routing + page composition
    ├── styles/
    │   └── index.css                  # global styles + Tailwind
    ├── data/
    │   └── index.js                   # ← all my content lives here
    ├── hooks/
    │   ├── useReveal.js               # intersection observer animations
    │   └── useScrollSpy.js            # active section tracking
    ├── pages/
    │   └── AllProjects.jsx            # /projects page
    └── components/
        ├── SpaceBackground.jsx        # canvas star field + shooting stars
        ├── CustomCursor.jsx           # custom cursor (desktop only)
        ├── Navbar.jsx                 # responsive nav + mobile menu
        ├── Hero.jsx                   # hero + animated code window
        ├── Marquee.jsx                # scrolling tech stack strip
        ├── Skills.jsx                 # tabbed skills + animated bars
        ├── Projects.jsx               # project list + featured card
        ├── NetworkCanvas.jsx          # animated node graph canvas
        ├── Experience.jsx             # tabbed experience timeline
        ├── About.jsx                  # about + photo + facts grid
        ├── Contact.jsx                # contact + social links
        ├── Footer.jsx                 # footer
        ├── SectionLabel.jsx           # reusable section label
        └── WhatsAppButton.jsx         # sticky WhatsApp CTA
```

---

## Tech Stack

| Technology     | Purpose                        |
|----------------|--------------------------------|
| React 18       | UI framework                   |
| Tailwind CSS 3 | Utility-first styling          |
| Vite 5         | Build tool + dev server        |
| Canvas API     | Space background + node graph  |
| Web Animations | Scroll reveal + transitions    |
| DM Mono        | Code / monospace font          |
| Bebas Neue     | Display / heading font         |
| Outfit         | Body font                      |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Rafsun-Islam/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## Customization

All content is stored in a **single file** — `src/data/index.js`. You only need to edit this one file to make the portfolio yours.

### Personal Info
```js
export const personal = {
  name: 'Your Name',
  email: 'your@email.com',
  location: 'Your City, Country',
  // ...
}
```

### Projects
```js
export const projects = [
  {
    num: '01',
    name: 'Your Project',
    type: 'Full Stack',
    tags: ['React', 'Node.js'],
    demoUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/you/project',
    description: 'What your project does...',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    featured: true, // shows in featured card
  },
]
```

### Skills
```js
export const skillCategories = [
  {
    id: 'frontend',
    label: '⚡ Frontend',
    skills: [
      { icon: '⚛', name: 'React', level: 'Advanced · 2 yrs', width: 0.88 },
      // width is 0.0 to 1.0
    ],
  },
]
```

### Profile Photo
Place your photo in the `public/` folder as `photo.jpg` and it will appear in the About section automatically.

### WhatsApp Number
In `src/components/WhatsAppButton.jsx`:
```js
const phone = '8801712345678' // country code + number, no + or spaces
```

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag and drop the dist/ folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# add to package.json scripts:
# "deploy": "gh-pages -d dist"
npm run build
npm run deploy
```

---

## Design System

| Token    | Value     | Usage              |
|----------|-----------|--------------------|
| `cyan`   | `#63caff` | Primary accent     |
| `cyan2`  | `#00ffe0` | Secondary accent   |
| `violet` | `#a78bfa` | Highlights         |
| `bg`     | `#03050a` | Page background    |
| `panel`  | `#0d1424` | Card backgrounds   |
| `ink`    | `#e8f0fe` | Body text          |
| `muted2` | `#6b7fa3` | Secondary text     |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgements

- Fonts by [Google Fonts](https://fonts.google.com)
- Icons by hand-crafted SVGs
- Inspired by the developer community

---

<div align="center">
  <p>Built with Love by <strong>Rafsun Islam Taskin</strong></p>
  <p>
    <a href="https://github.com/Rafsun-Islam">GitHub</a> ·
    <a href="https://linkedin.com/in/rafsunislamtaskin">LinkedIn</a> ·
    <a href="mailto:your@email.com">rafsunislamtaskin024@gmail.com</a>
  </p>
</div>
