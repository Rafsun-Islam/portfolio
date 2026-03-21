// ─── PERSONAL INFO ───────────────────────────────────────────────────────────
export const personal = {
  name: 'Rafsun Islam Taskin',
  initials: 'RST',
  role: 'Software Engineer',
  tagline: 'Class of 2025',
  email: 'rafsunislamtaskin024@gmail.com',
  description:
    "Software Engineer — turning complex problems into <em>elegant</em>, <em>scalable</em> code. Passionate about Web & Flutter development and building products people love.",
  location: 'Barisal, Bangladesh',
  degree: 'B.Sc. CSE · 2025',
  availability: 'Open to Work',
  focus: 'Web / Flutter',
  languages: 'English · Bengali',
  interests: 'Open Source · DSA',
  about:
    "I'm a CSE graduate who fell in love with programming. Today I build web applications and APIs that solve real problems. I care deeply about code quality, user experience, and continuous learning — and I'm always looking for the next great team to join.",
  aboutQuote: "I build things that matter — and I do it with care.",
  social: {
    github:   '#',
    linkedin: '#',
    twitter:  '#',
    resume:   '#',
  },
}

// ─── NAV LINKS ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',     href: '#hero'     },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Work',       href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'About',      href: '#about'      },
]

// ─── TECH MARQUEE ────────────────────────────────────────────────────────────
export const techStack = [
  'React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL',
  'Docker', 'AWS', 'Next.js', 'GraphQL', 'Redis', 'Git', 'Linux',
]

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: 'frontend',
    label: '⚡ Frontend',
    skills: [
      { icon: '⚛', name: 'React / Next.js',  level: 'Advanced · 2 yrs',       width: 0.88 },
      { icon: '📘', name: 'TypeScript',        level: 'Intermediate · 1.5 yrs', width: 0.76 },
      { icon: '🎨', name: 'CSS / Tailwind',    level: 'Advanced · 3 yrs',       width: 0.93 },
      { icon: '✨', name: 'Animations',         level: 'Intermediate · 1 yr',    width: 0.72 },
    ],
  },
  {
    id: 'backend',
    label: '🔧 Backend',
    skills: [
      { icon: '🟢', name: 'Node.js / Express', level: 'Advanced · 2 yrs',       width: 0.86 },
      { icon: '🐍', name: 'Python / FastAPI',   level: 'Advanced · 3 yrs',       width: 0.89 },
      { icon: '🗄',  name: 'PostgreSQL',         level: 'Intermediate · 1.5 yrs', width: 0.74 },
      { icon: '⚡', name: 'Redis / MongoDB',    level: 'Intermediate · 1 yr',    width: 0.66 },
    ],
  },
  {
    id: 'devops',
    label: '☁ DevOps',
    skills: [
      { icon: '🐳', name: 'Docker',              level: 'Intermediate · 1 yr',  width: 0.74 },
      { icon: '☁',  name: 'AWS (EC2, S3, RDS)',  level: 'Beginner · 8 mo',      width: 0.60 },
      { icon: '🔄', name: 'CI/CD Pipelines',     level: 'Intermediate · 1 yr',  width: 0.72 },
      { icon: '🐧', name: 'Linux / Bash',         level: 'Intermediate · 2 yrs', width: 0.78 },
    ],
  },
  {
    id: 'cs',
    label: '🧠 CS Core',
    skills: [
      { icon: '📊', name: 'Data Structures & Algo', level: 'Advanced · 4 yrs',       width: 0.91 },
      { icon: '🏗',  name: 'System Design',           level: 'Intermediate · 2 yrs',  width: 0.70 },
      { icon: '🔒', name: 'OOP & Design Patterns',   level: 'Advanced · 3 yrs',       width: 0.85 },
      { icon: '🔀', name: 'Agile / Scrum',            level: 'Intermediate · 1 yr',   width: 0.76 },
    ],
  },
]

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    num: '01',
    name: 'Task Manager Pro',
    type: 'Full Stack',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
    description:
      'Real-time collaborative task manager with team workspaces, drag-and-drop boards, and live notifications. Handles 10k+ concurrent users via WebSocket clusters deployed on AWS.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
  },
  {
    num: '02',
    name: 'ML Sentiment API',
    type: 'Machine Learning',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    num: '03',
    name: 'Dev CLI Dashboard',
    type: 'Open Source',
    tags: ['Node.js', 'TypeScript', 'npm'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    num: '04',
    name: 'E-Commerce Platform',
    type: 'Full Stack',
    tags: ['Next.js', 'Stripe', 'Prisma', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
  },
]

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: 'x1',
    role: 'Software Engineer Intern',
    company: 'Tech Company Name',
    date: 'Jun – Aug 2024 · Remote',
    tabDate: 'Jun – Aug 2024 · Remote',
    bullets: [
      'Built and maintained 12 React components for the main product dashboard used by 50k+ daily users.',
      'Collaborated with senior engineers on REST API integrations, reducing page load time by 30%.',
      'Participated in code reviews, sprint planning, and daily stand-ups in an 8-person Agile team.',
      'Wrote unit and integration tests achieving 85% code coverage on assigned modules.',
    ],
    tags: ['React', 'TypeScript', 'Jest', 'Agile'],
  },
  {
    id: 'x2',
    role: 'Backend Developer Intern',
    company: 'Startup Name',
    date: 'Jan – May 2024 · On-site',
    tabDate: 'Jan – May 2024 · On-site',
    bullets: [
      'Designed and built 8 RESTful API endpoints with Node.js / Express serving 50k+ daily requests.',
      'Optimized SQL queries reducing average response time from 340ms to 85ms.',
      'Implemented JWT authentication and role-based access control across the platform.',
      'Deployed containerized services via Docker on a Linux VPS environment.',
    ],
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'JWT'],
  },
  {
    id: 'x3',
    role: 'B.Sc. Computer Science',
    company: 'Your University',
    date: '2020 – 2024 · CGPA: 3.8 / 4.0',
    tabDate: '2020 – 2024 · University',
    bullets: [
      'Graduated with honors — Dean\'s List every semester. Specialized in Software Engineering.',
      'Final-year thesis on microservice orchestration with dynamic load balancing.',
      'Led the university Coding Club for 2 years, organizing hackathons for 200+ students.',
      'Core coursework: Algorithms, Distributed Systems, OS, Database Design, Compilers.',
    ],
    tags: ["Dean's List", 'Thesis', 'Club Lead', 'Honors'],
  },
]
