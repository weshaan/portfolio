/**
 * ═══════════════════════════════════════════════════════════════
 *  PORTFOLIO — Edit this file to personalize your site
 * ═══════════════════════════════════════════════════════════════
 */

export const site = {
  name: 'Eshaan Walia',
  tagline: 'Full-Stack Java Developer · LLMs & RAG · Open Source',
  headline: 'Building intelligent systems & resilient software',
  subheadline:
    'GSoC Contributor @ FOSSASIA · SDE Intern @ Attryb · Studying LLMs & RAG-based systems while shipping full-stack apps, ML pipelines, and open-source tools.',
  location: 'Patiala, Punjab, India',
  email: 'your.email@example.com', // ← replace with your email
  availability: 'Open to opportunities',
  year: new Date().getFullYear(),
}

export const github = {
  url: 'https://github.com/weshaan',
  username: 'weshaan',
  avatar: 'https://avatars.githubusercontent.com/u/118920744?v=4',
  bio: 'Full Stack Java Developer | Studying about LLMs • RAG based systems. Open source geek',
  commits: '1.4k',
  repos: 39,
  mergedPrs: 61,
  following: 35,
  memberSince: '2022',
}

export const instagram = {
  url: 'https://www.instagram.com/illuminating.self/',
  username: 'illuminating.self',
  name: 'Project Resilience',
  bio: 'Stories on growth, resilience, and illuminating the path to a stronger self.',
  posts: 126,
  views: '3M+',
  followers: '21.2K',
  following: 120,
  activeSince: '2024',
}

export const social = {
  linkedin: 'https://www.linkedin.com/in/eshaan-walia/',
  github: 'https://github.com/weshaan',
  instagram: 'https://www.instagram.com/illuminating.self/',
  twitter: '', // add if you have one
  resume:
    'https://drive.google.com/file/d/1H3btM2KlieQ2bWND3dEfkqu_jrpcQZdN/view?usp=sharing',
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export const skills = [
  'Java',
  'Spring Boot',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'C++',
  'SQL',
  'MERN Stack',
  'LLMs',
  'RAG',
  'FAISS',
  'Machine Learning',
  'LSTM',
  'REST APIs',
  'Open Source',
  'Blockchain',
  'Smart Contracts',
  'Git',
  'HPX',
  'Multithreading',
]

export const about = {
  intro: `Hi, I'm ${site.name}! ${github.bio} I've been coding since school — borrowing Java and OOP books from the library and running every example on my laptop.`,
  story: `During my B.Tech in Electronics and Computer Engineering at Thapar Institute, I evolved from hobbyist to engineer — building across Java/Spring Boot, MERN, Python ML, C++ systems programming, and blockchain.`,
  community: `Active on GitHub with ${github.commits} commits and ${github.mergedPrs} merged PRs. Contributor to Google Summer of Code (FOSSASIA), Hacktoberfest, GirlScript Summer of Code, and MLH — shipping real code in global open-source communities.`,
}

export const education = [
  {
    school: 'Thapar Institute of Engineering & Technology',
    degree: 'B.Tech — Electronics & Computer Engineering',
    period: '2022 — 2026',
    detail: 'Software systems, applied AI, and full-stack engineering.',
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    company: 'Google Summer of Code',
    role: 'Open Source Contributor',
    period: 'May 2026 — Present',
    location: 'Remote',
    current: true,
    highlights: [
      'Selected for GSoC 2026 with FOSSASIA — building production open-source software.',
      'Working on SUSI Web Audio API — AudioWorklet integration for eventyay-video player.',
    ],
  },
  {
    company: 'FOSSASIA',
    role: 'Open Source Contributor',
    period: 'May 2026 — Present',
    location: 'Singapore (Remote)',
    current: true,
    highlights: [
      'Contributing to open-source tooling under experienced mentors.',
      'Audio/video infrastructure and community-driven developer tools.',
    ],
  },
  {
    company: 'Hacktoberfest',
    role: 'Open Source Contributor',
    period: 'Oct 2023 — Present',
    location: 'Remote',
    highlights: [
      'Multi-year contributor shipping PRs across diverse repositories.',
      'Documentation, bug fixes, and feature work in active codebases.',
    ],
  },
  {
    company: 'DevAnant',
    role: 'Software Engineer Intern',
    period: 'Jun 2024 — Jul 2024',
    location: 'IIT Ropar, Punjab',
    highlights: [
      'Built full-stack MERN apps with JWT auth and RESTful APIs.',
      'Optimized backend queries and deployed production features.',
    ],
  },
  {
    company: 'GirlScript Summer of Code',
    role: 'Open Source Contributor',
    period: 'Oct 2024 — Nov 2024',
    location: 'Delhi, India',
    highlights: ['Contributed to community projects during GSSoC.'],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
  featured?: boolean
  stars?: number
}

export const projects: Project[] = [
  {
    title: 'PolicyAI — RAG Policy Analyzer',
    description:
      'AI-powered insurance policy analyzer using RAG with FAISS and LLMs — upload PDFs, ask questions, get intelligent answers from your documents.',
    tags: ['Python', 'RAG', 'FAISS', 'LLM'],
    github: 'https://github.com/weshaan/PolicyAI-Insurance-Policy-Analyzer-using-RAG-with-LLM',
    featured: true,
    stars: 1,
  },
  {
    title: 'BUYC Corp Marketplace',
    description:
      'Full-stack marketplace for second-hand car dealerships — inventory management, grading system, and modern dealer workflows.',
    tags: ['JavaScript', 'Full-Stack', 'React'],
    github: 'https://github.com/weshaan/BUYC-Corp-inventory-grade-marketplace',
    featured: true,
  },
  {
    title: 'SmartInventory API',
    description:
      'Production-grade Inventory Management REST API built with Spring Boot — secure, scalable backend for real-world inventory ops.',
    tags: ['Java', 'Spring Boot', 'REST'],
    github: 'https://github.com/weshaan/Spring-boot-mini-projects',
    featured: true,
    stars: 1,
  },
  {
    title: 'CNN Skin Disease Detection',
    description:
      'DenseNet transfer learning on HAM10000 dataset for dermatological image classification — end-to-end ML pipeline.',
    tags: ['Python', 'CNN', 'DenseNet', 'ML'],
    github: 'https://github.com/weshaan/CNN-skin-disease-detection',
    stars: 1,
  },
  {
    title: 'GasScope — LSTM + Smart Contracts',
    description:
      'Predicts Ethereum gas fees with LSTM and monitors real-time data via smart contracts — ML meets blockchain.',
    tags: ['Python', 'LSTM', 'Blockchain'],
    github: 'https://github.com/weshaan/Gas-Price-Optimization-using-LSTM-and-Smart-Contracts',
    stars: 1,
  },
  {
    title: 'HPX Parallel Matrix Multiply',
    description:
      'High-performance parallel matrix multiplication using the HPX C++ runtime — exploring distributed systems at scale.',
    tags: ['C++', 'HPX', 'HPC'],
    github: 'https://github.com/weshaan/HPX-pll-matrix-mtply',
    stars: 1,
  },
  {
    title: 'SUSI Web Audio API',
    description:
      'AudioWorklet implementation for eventyay-video player — raw PCM audio extraction for FOSSASIA/GSoC.',
    tags: ['Audio', 'Web API', 'Open Source'],
    github: 'https://github.com/weshaan/SUSI-Web-Audio-API',
  },
  {
    title: 'Multithreading Lab',
    description:
      'Collection of Python projects exploring concurrency fundamentals — threads, locks, pools, and parallel patterns.',
    tags: ['Python', 'Concurrency'],
    github: 'https://github.com/weshaan/multithreading-mini-projects',
    stars: 1,
  },
  {
    title: '100 Days of Code',
    description:
      'Daily C programming challenges — disciplined practice log from early coding journey.',
    tags: ['C', 'Learning'],
    github: 'https://github.com/weshaan/100-days-100-code',
    stars: 4,
  },
  {
    title: 'This Portfolio',
    description:
      'Animated creative portfolio — React Bits, WebGL backgrounds, buttery motion, and a single-file data template.',
    tags: ['React', 'Vite', 'Motion'],
    github: 'https://github.com/weshaan',
  },
]

export const contactMessage = {
  title: "Let's build something extraordinary",
  subtitle:
    "Whether it's a role, a collab, or an open-source idea — my inbox is open. Drop a line and let's talk.",
}

export const heroRoles = [
  'Full-Stack Developer',
  'RAG Engineer',
  'Open Source Contributor',
  'Java Developer',
  'ML Builder',
]
