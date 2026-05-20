# Rafsun Islam Taskin — Software Engineer Portfolio

![Portfolio Preview](./public/og-image.png)

A modern, responsive, SEO-optimized personal portfolio website for **Rafsun Islam Taskin**, built with **React**, **Vite**, and **Tailwind CSS**.

This portfolio is designed to present my skills, projects, academic background, proof of work, and contact information in a clean and professional way for recruiters, hiring managers, collaborators, and anyone interested in my software engineering work.

🌐 **Live Website:** [https://rafsunislamtaskin.live](https://rafsunislamtaskin.live)

---

## Table of Contents

- [Overview](#overview)
- [Purpose](#purpose)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Lighthouse Score](#lighthouse-score)
- [Project Preview](#project-preview)
- [Sections](#sections)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Contact Form Setup](#contact-form-setup)
- [SEO Setup](#seo-setup)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Styling Guide](#styling-guide)
- [Performance Notes](#performance-notes)
- [Important Cleanup Notes](#important-cleanup-notes)
- [Quality Checklist](#quality-checklist)
- [Live URLs to Check](#live-urls-to-check)
- [Author](#author)
- [License](#license)

---

## Overview

This is my personal software engineering portfolio website. It is built to give visitors a quick but complete understanding of who I am, what I work with, what I have built, and how to contact me.

The design follows a **professional dark dashboard style** with a modern hero section, animated terminal interface, curated project cards, skill modules, proof of work, about section, and a direct contact form.

The goal of the portfolio is not only to look visually polished, but also to be practical, fast, accessible, SEO-friendly, and recruiter-focused.

---

## Purpose

The main purpose of this portfolio is to support my software engineering job search by clearly showing:

- Who I am
- What technologies I work with
- What projects I have built
- My academic background
- My proof of work
- My contact details
- My readiness for software engineering opportunities

This portfolio is built with a strong focus on:

- Clean UI
- Fast performance
- Mobile responsiveness
- Clear content hierarchy
- Professional presentation
- SEO and social sharing optimization

---

## Features

### Design and User Experience

- Modern dashboard-inspired hero section
- Animated terminal-style developer panel
- Clean dark theme with cyan, blue, and violet accents
- Responsive design for desktop, tablet, and mobile
- Full-screen mobile navigation menu
- Active navigation section highlight
- Smooth scrolling
- Professional call-to-action buttons
- Custom favicon and logo
- Optimized Open Graph image for social sharing

### Portfolio Sections

- Hero / introduction section
- Technology marquee
- Skills module section
- Projects showcase
- Proof of work section
- About section
- Contact section
- Project archive page

### Technical Features

- Built with React and Vite
- Tailwind CSS utility-first styling
- Static data-driven content structure
- Working contact form using Web3Forms
- SEO meta tags
- Open Graph tags
- Twitter card support
- JSON-LD structured data
- Sitemap
- Robots file
- Web manifest
- Vercel SPA rewrite support
- Lighthouse optimized

---

## Tech Stack

This portfolio is built using the following technologies:

| Technology | Purpose |
|---|---|
| React | Frontend UI library |
| Vite | Fast development and build tool |
| Tailwind CSS | Styling and responsive layout |
| JavaScript | Application logic |
| Web3Forms | Contact form email delivery |
| Vercel | Deployment and hosting |
| HTML Meta / JSON-LD | SEO and structured data |

---

## Lighthouse Score

The portfolio has been tested with Google Lighthouse and achieved a perfect score in Incognito mode.

| Category | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

This confirms that the site is optimized for speed, accessibility, technical quality, and search engine visibility.

---

## Project Preview

The portfolio uses a custom Open Graph preview image for better link sharing on platforms like LinkedIn, Facebook, Discord, Messenger, and Twitter/X.

Preview image location:

```txt
public/og-image.png
```

Favicon location:

```txt
public/favicon.png
```

---

## Sections

### Home

The home section introduces the portfolio with a dashboard-style layout. It includes:

- Availability status
- Education badge
- Main headline
- Short introduction
- CTA buttons
- Status cards
- Animated terminal preview

### Skills

The skills section presents my technical stack in a structured way. It includes frontend, mobile, backend, database, and computer science fundamentals.

### Projects

The projects section highlights selected projects with:

- Project name
- Project type
- Description
- Impact
- Technologies used
- GitHub link
- Live preview or details link

The projects are manually curated from `src/data/index.js`, which gives full control over how each project is presented.

### Proof of Work

This section highlights academic achievements, scholarships, research work, and learning milestones.

### About

The about section gives a more personal introduction and explains my engineering mindset.

### Contact

The contact section includes:

- Direct email
- LinkedIn
- GitHub
- Contact form
- Optional WhatsApp button support

The contact form sends messages directly to email using Web3Forms.

---

## Project Structure

```txt
portfolio/
├── public/
│   ├── favicon.png
│   ├── og-image.png
│   ├── photo.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Proof.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Skills.jsx
│   │   └── WhatsAppButton.jsx
│   │
│   ├── data/
│   │   └── index.js
│   │
│   ├── pages/
│   │   └── AllProjects.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── vercel.json
└── README.md
```

---

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Rafsun-Islam/your-repository-name.git
```

### 2. Go to the project folder

```bash
cd your-repository-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The project will run locally at:

```txt
http://localhost:5173
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview production build locally

```bash
npm run preview
```

---

## Environment Variables

The contact form uses Web3Forms. To make the form work, create a `.env` file in the project root.

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

Important:

```txt
Never commit .env to GitHub.
```

For Vercel deployment, add the same variable in the Vercel dashboard:

```txt
VITE_WEB3FORMS_ACCESS_KEY = your_web3forms_access_key_here
```

---

## Contact Form Setup

The contact form is located in:

```txt
src/components/Contact.jsx
```

It sends form submissions through Web3Forms.

The form includes:

- Name
- Email
- Subject
- Message
- Loading state
- Success message
- Error message
- Spam protection field

To make it work:

1. Create an access key from Web3Forms.
2. Add it to `.env` locally.
3. Add it to Vercel environment variables for production.
4. Restart the development server after adding `.env`.

```bash
npm run dev
```

---

## SEO Setup

This portfolio includes a complete SEO setup.

### Included SEO Features

- Meta title
- Meta description
- Meta keywords
- Canonical URL
- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card image
- Person schema
- Website schema
- Robots file
- Sitemap
- Web manifest
- Favicon
- Social preview image

### Important SEO Files

```txt
index.html
public/robots.txt
public/sitemap.xml
public/site.webmanifest
public/og-image.png
public/favicon.png
```

### Open Graph Image

The Open Graph image is used when the website link is shared on social platforms.

```txt
public/og-image.png
```

Recommended size:

```txt
1200 x 630 px
```

### Robots File

```txt
public/robots.txt
```

Example:

```txt
User-agent: *
Allow: /

Sitemap: https://rafsunislamtaskin.live/sitemap.xml
```

### Sitemap File

```txt
public/sitemap.xml
```

This helps search engines discover the main pages of the portfolio.

---

## Deployment

This project is ready to deploy on Vercel.

### Deploy on Vercel

1. Push the project to GitHub.
2. Import the repository on Vercel.
3. Add the Web3Forms environment variable.
4. Deploy.

### Vercel SPA Routing

The project includes `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures routes like `/projects` work properly even after refreshing the page.

---

## Customization Guide

Most content can be updated from:

```txt
src/data/index.js
```

This file controls:

- Personal information
- Navigation links
- Social links
- Tech stack
- Skill categories
- Project data
- Proof of work data

### Update Personal Information

```js
export const personal = {
  name: "Rafsun Islam Taskin",
  role: "Software Engineer",
  email: "rafsunislamtaskin024@gmail.com",
  location: "Dhaka, Bangladesh"
};
```

### Update Projects

Projects are stored in the `projects` array.

```js
export const projects = [
  {
    num: "01",
    name: "Project Name",
    type: "Frontend Web App",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    description: "Project description",
    impact: "Project impact"
  }
];
```

### Update Skills

Skill categories are stored in:

```js
export const skillCategories = [];
```

### Update SEO

Main SEO content is in:

```txt
index.html
```

If the domain changes, update these fields:

- canonical URL
- og:url
- og:image
- twitter:image
- JSON-LD url
- sitemap URL
- robots sitemap URL

---

## Styling Guide

Global styles are located in:

```txt
src/styles/index.css
```

Tailwind theme configuration is located in:

```txt
tailwind.config.js
```

The design uses:

- Dark navy background
- Cyan accent
- Blue and violet support colors
- Soft border colors
- Glass-style cards
- Clean rounded buttons
- Responsive spacing

Fonts used:

- Plus Jakarta Sans for headings
- Inter for body text
- JetBrains Mono for terminal and small labels

---

## Performance Notes

To keep the portfolio fast:

- Keep images optimized.
- Use compressed `.png`, `.jpg`, or `.webp` files.
- Avoid uploading large unused assets.
- Do not commit `node_modules`.
- Do not commit `dist`.
- Keep project data curated instead of fetching unnecessary external APIs.

Recommended image sizes:

| File | Recommended Size |
|---|---|
| `og-image.png` | 1200 x 630 |
| `favicon.png` | 512 x 512 |
| `photo.png` | Optimized under 500 KB if possible |

---

## Important Cleanup Notes

Before pushing to GitHub, make sure these are not committed:

```txt
node_modules/
dist/
.env
.env.local
```

Recommended `.gitignore`:

```gitignore
node_modules
dist
.env
.env.local
.DS_Store
.vscode
.idea
```

If `node_modules` was already tracked by Git, remove it from tracking:

```bash
git rm -r --cached node_modules
```

Then commit again.

---

## Quality Checklist

Before final deployment, check:

- [ ] Website loads correctly
- [ ] Mobile navbar works
- [ ] Contact form sends email
- [ ] Resume link works
- [ ] GitHub links work
- [ ] LinkedIn link works
- [ ] Project links work
- [ ] Favicon appears correctly
- [ ] OG image loads correctly
- [ ] Sitemap opens correctly
- [ ] Robots file opens correctly
- [ ] Lighthouse score is good
- [ ] No console errors from site code

---

## Live URLs to Check

After deployment, verify these:

```txt
https://rafsunislamtaskin.live
https://rafsunislamtaskin.live/favicon.png
https://rafsunislamtaskin.live/og-image.png
https://rafsunislamtaskin.live/robots.txt
https://rafsunislamtaskin.live/sitemap.xml
https://rafsunislamtaskin.live/site.webmanifest
```

---

## Author

**Rafsun Islam Taskin**  
Software Engineer  
Dhaka, Bangladesh

Email: [rafsunislamtaskin024@gmail.com](mailto:rafsunislamtaskin024@gmail.com)

GitHub: [https://github.com/Rafsun-Islam](https://github.com/Rafsun-Islam)

LinkedIn: [https://www.linkedin.com/in/rafsunislamtaskin/](https://www.linkedin.com/in/rafsunislamtaskin/)

---

## License

This project is built for personal portfolio and professional branding purposes.

You may use the structure and ideas as inspiration, but please do not directly copy the personal branding, text content, logo, images, or assets.