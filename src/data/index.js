// ─── PERSONAL INFO ───────────────────────────────────────────────────────────
export const personal = {
  name: "Rafsun Islam Taskin",
  initials: "RST",
  role: "Software Engineer",
  email: "rafsunislamtaskin024@gmail.com",
  description:
    "Software Engineer — turning complex problems into <em>elegant</em>, <em>scalable</em> code. Passionate about Web & Flutter development and building products people love.",
  location: "Dhaka, Bangladesh",
  degree: "B.Sc. CSE · 2025",
  availability: "Open to Work",
  focus: "Web / Flutter",
  languages: "English · Bengali",
  interests: "Open Source · DSA",
  about:
    "I'm a CSE graduate who fell in love with programming. Today I build web and flutter applications and APIs that solve real problems. I care deeply about code quality, user experience, and continuous learning — and I'm always looking for the next great team to join.",
  aboutQuote: "I build things that matter — and I do it with care.",
  social: {
    github: "https://github.com/Rafsun-Islam",
    linkedin: "https://www.linkedin.com/in/rafsunislamtaskin/",
    resume:
      "https://drive.google.com/file/d/1Y3Eo1JuONAYTsSmul-Yc27dUBJto7QYB/view?usp=sharing",
  },
};

// ─── NAV LINKS ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

// ─── TECH MARQUEE ────────────────────────────────────────────────────────────
export const techStack = [
  "React",
  "Flutter",
  "Node.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Next.js",
  "GraphQL",
  "Git",
  "Linux",
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      {  name: "React / Next.js", level: "Beginner", width: 0.88 },
      {  name: "TypeScript", level: "Beginner", width: 0.76 },
      {  name: "CSS / Tailwind", level: "Beginner", width: 0.93 },
      {  name: "Animations", level: "Beginner", width: 0.72 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      {  name: "Node.js / Express", level: "Beginner", width: 0.86 },
      {  name: "Python / FastAPI", level: "Beginner", width: 0.89 },
      {  name: "PostgreSQL", level: "Beginner", width: 0.74 },
      {  name: "Redis / MongoDB", level: "Beginner", width: 0.66 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: [
      {  name: "Docker", level: "Beginner", width: 0.74 },
      {  name: "AWS (EC2, S3, RDS)", level: "Beginner", width: 0.6 },
      {  name: "CI/CD Pipelines", level: "Beginner", width: 0.72 },
      {  name: "Linux / Bash", level: "Beginner", width: 0.78 },
    ],
  },
  {
    id: "cs",
    label: "CS Core",
    skills: [
      {
        name: "Data Structures & Algo",
        level: "Beginner",
        width: 0.91,
      },
      { name: "System Design", level: "Beginner", width: 0.7 },
      {
        name: "OOP & Design Patterns",
        level: "Beginner",
        width: 0.85,
      },
      { name: "Agile / Scrum", level: "Beginner", width: 0.76 },
    ],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    num: "01",
    name: "Ikram Real Estate",
    type: "Full Stack",
    tags: ["React", "Vite", "CSS"],
    demoUrl: "https://ikramrealestate.vercel.app",
    githubUrl: "https://github.com/Rafsun-Islam/IkramRealEstate",
    featured: true,
    description:
      "A modern real estate web application built with React and Vite. Features responsive design with live deployment on Vercel showcasing property listings and estate management capabilities.",
    stack: ["React", "Vite", "CSS", "Vercel"],
  },
  {
    num: "02",
    name: "Aftabnagor Bus Management System",
    type: "Full Stack",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    demoUrl: "N/A",
    githubUrl:
      "https://github.com/Rafsun-Islam/AftabNagar_Bus_Management_System",
    featured: true,
    description:
      "A comprehensive web-based bus management system with user registration, ticket purchasing, real-time tracking, and an admin panel. Features include feedback system, responsive design, and complete database management for bus operations.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    num: "03",
    name: "Bank Management System",
    type: "Desktop Application",
    tags: ["Java", "NetBeans", "OOP"],
    demoUrl: "N/A",
    githubUrl: "https://github.com/Rafsun-Islam/Bank_Management_System",
    featured: false,
    description:
      "A Java-based banking application developed using NetBeans IDE. Includes functionalities like user and admin login, account creation, balance inquiry, deposit, withdrawal, and transfer operations. Demonstrates strong object-oriented programming principles.",
    stack: ["Java", "NetBeans", "OOP"],
  },
  {
    num: "04",
    name: "Network Design - Apex University",
    type: "Infrastructure",
    tags: ["Cisco Packet Tracer", "Networking", "DHCP", "DNS"],
    demoUrl: "N/A",
    githubUrl: "https://github.com/Rafsun-Islam/Network-Design",
    featured: false,
    description:
      "Complex network infrastructure design for Apex University featuring multiple subnets, dynamic routing, DHCP, DNS, and web server configuration using Cisco Packet Tracer. Demonstrates advanced networking concepts and enterprise-level design patterns.",
    stack: ["Cisco Packet Tracer", "DHCP", "DNS", "Routing"],
  },
];

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
export const experiences = [
  {
    id: "x3",
    role: "B.Sc. Computer Science and Engineering",
    company: "East West University",
    date: "2021 – 2025 · CGPA: 3.91 / 4.0",
    tabDate: "2021 – 2025 · University",
    bullets: [
      "Received Dean's Scholarship in Fall 2022 and Fall 2024, and Merit Scholarship in Fall 2023. Graduated with Summa Cum Laude.",
      "Final-year thesis on 'Automating Radiology Report Generation with CDGPT-3.5: A Deep Learning Approach for Enhancing Medical Image Interpretation'.",
      "Core coursework: Algorithms, OS, Database Design.",
    ],
    tags: [
      "Dean Scholarship",
      "Merit Scholarship",
      "Thesis",
      "Summa Cum Laude",
    ],
  },
];
