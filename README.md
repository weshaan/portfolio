# Eshaan Walia — Creative Portfolio

A multi-page animated portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and [**React Bits**](https://reactbits.dev) components.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero with Aurora background, featured projects |
| `/about` | Bio, education, skills |
| `/experience` | Timeline of roles & open-source work |
| `/projects` | Full project grid |
| `/contact` | Particles background + mailto form |

## Customize your details

**Edit one file:** `src/data/siteData.ts`

Update name, bio, experience, projects, social links, and email. Add your resume to `public/resume.pdf`.

## React Bits used

- **BlurText** — animated headings
- **Aurora** — hero gradient background (WebGL)
- **Particles** — contact page background (WebGL)
- **SpotlightCard** — cursor-following glow cards
- **Magnet** — magnetic buttons & nav links

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build   # production build
npm run preview # preview build
```

## Stack

- React 19 + TypeScript + Vite
- React Router
- Motion (Framer Motion)
- Lenis smooth scroll
- OGL (WebGL for Aurora & Particles)
- 100% frontend — contact form uses `mailto:`
