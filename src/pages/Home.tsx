import { Link } from 'react-router-dom'
import BlurText from '@/components/react-bits/BlurText'
import Magnet from '@/components/react-bits/Magnet'
import TextType from '@/components/react-bits/TextType'
import ShinyText from '@/components/react-bits/ShinyText'
import SkillMarquee from '@/components/SkillMarquee'
import ProjectCard from '@/components/ProjectCard'
import GitHubStats from '@/components/GitHubStats'
import InstagramStats from '@/components/InstagramStats'
import HomeScrollBackground from '@/components/HomeScrollBackground'
import Reveal from '@/components/Reveal'
import { PageContainer, Section } from '@/components/layout/PageContainer'
import { projects, site, social, heroRoles } from '@/data/siteData'

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      <HomeScrollBackground />

      <section className="relative -mt-[4.5rem] min-h-screen overflow-hidden pt-[4.5rem]">
        <PageContainer className="relative z-10 flex min-h-[calc(100vh-4.5rem)] flex-col justify-center py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-void/50 px-4 py-2 font-mono text-xs uppercase tracking-widest text-accent-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-2" />
              {site.availability}
            </p>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <BlurText
                text={site.name}
                as="span"
                className="text-gradient-animated"
                delay={40}
                animateBy="letters"
                stepDuration={0.45}
              />
            </h1>

            <p className="mb-4 text-lg text-muted sm:text-xl md:text-2xl">
              <BlurText text={site.headline} as="span" delay={60} animateBy="words" stepDuration={0.4} />
            </p>

            <div className="mb-6 min-h-[2rem] font-mono text-base text-accent-2 sm:text-lg">
              <TextType
                text={heroRoles}
                typingSpeed={70}
                pauseDuration={2000}
                deletingSpeed={40}
                loop
                showCursor
                cursorCharacter="|"
              />
            </div>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-muted">{site.subheadline}</p>

            <div className="flex flex-wrap gap-3">
              <Magnet magnetStrength={3} lerp={0.12}>
                <Link
                  to="/projects"
                  className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-bold text-void"
                >
                  View work ↗
                </Link>
              </Magnet>
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent-2/40"
              >
                GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent/40"
              >
                LinkedIn
              </a>
              <a
                href={social.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent-3/40"
              >
                Resume
              </a>
            </div>
          </div>
        </PageContainer>
      </section>

      <div className="relative z-10">
        <SkillMarquee />

      <Section>
        <div className="space-y-6">
          <GitHubStats />
          <InstagramStats />
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-3">Selected work</span>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                <ShinyText text="Featured projects" speed={4} color="#ececf4" shineColor="#22d3ee" />
              </h2>
            </div>
            <Link to="/projects" className="link-underline text-sm font-medium text-muted hover:text-text">
              See all →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-y border-border/40 bg-surface/20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            <BlurText text="Let's create something bold." as="span" delay={50} animateBy="words" />
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Open to internships, full-time roles, and open-source collabs.
          </p>
          <Magnet magnetStrength={3} lerp={0.12} wrapperClassName="mt-8 inline-block">
            <Link to="/contact" className="btn-glow inline-block rounded-full border-gradient px-8 py-3.5 text-sm font-bold">
              Get in touch
            </Link>
          </Magnet>
        </Reveal>
      </Section>
      </div>
    </>
  )
}
