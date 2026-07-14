import { useMemo, useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import TargetCursor from '@/components/react-bits/TargetCursor'
import ProjectLoadoutCard, { shortTitle } from '@/components/projects/ProjectLoadoutCard'
import { Section } from '@/components/layout/PageContainer'
import { projects } from '@/data/siteData'

const featuredCount = projects.filter((p) => p.featured).length

export default function Projects() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null)
  const activeProject = useMemo(
    () => projects.find((p) => p.title === activeTitle) ?? projects[0],
    [activeTitle],
  )

  return (
    <>
      <TargetCursor
        targetSelector=".cursor-target"
        cursorColor="#c8d0dc"
        cursorColorOnTarget="#de9b35"
        spinDuration={2.4}
      />

      <div className="projects-armory relative min-h-screen">
        <div className="projects-armory__bg" aria-hidden>
          <div className="projects-armory__speedlines" />
          <div className="projects-armory__grid" />
          <div className="projects-armory__vignette" />
        </div>

        <Section tight className="relative">
          <SectionHeading
            eyebrow="Projects"
            title="Project armory"
            subtitle="Select a skin · Inspect on GitHub"
            trailing={
              <div className="armory-hud__stats shrink-0">
                <div className="armory-stat">
                  <span className="armory-stat__label">INVENTORY</span>
                  <span className="armory-stat__value">{String(projects.length).padStart(2, '0')}</span>
                </div>
                <div className="armory-stat armory-stat--gold">
                  <span className="armory-stat__label">COVERT</span>
                  <span className="armory-stat__value">{featuredCount}</span>
                </div>
              </div>
            }
          />

          <div className="armory-ui flex flex-col gap-6 lg:flex-row lg:gap-8">
            <aside className="armory-feed lg:w-56 lg:shrink-0">
              <div className="armory-feed__header">
                <span>EQUIPPED</span>
                <span className="armory-feed__jp">装備</span>
              </div>
              <ul className="armory-feed__list">
                {projects.map((project, i) => {
                  const isActive = activeTitle === project.title || (!activeTitle && i === 0)
                  return (
                    <li
                      key={project.title}
                      className={isActive ? 'armory-feed__item armory-feed__item--active' : 'armory-feed__item'}
                    >
                      <span className="armory-feed__you">YOU</span>
                      <span className="armory-feed__verb">equipped</span>
                      <span className="armory-feed__weapon">{shortTitle(project.title)}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="armory-intel mt-4">
                <div className="armory-intel__label">ACTIVE ITEM</div>
                <div className="armory-intel__name">{shortTitle(activeProject.title)}</div>
                <p className="armory-intel__desc">{activeProject.description}</p>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <div className="armory-grid-header mb-4 flex items-center justify-between">
                <span className="armory-grid-header__label">BUY MENU // SKINS</span>
                <span className="armory-grid-header__hint font-mono text-[10px] tracking-widest text-[#5eead4]/70">
                  TARGET LOCK ENABLED
                </span>
              </div>

              <div className="loadout-grid">
                {projects.map((project, i) => (
                  <ProjectLoadoutCard
                    key={project.title}
                    project={project}
                    index={i}
                    isActive={activeTitle === project.title}
                    onHover={setActiveTitle}
                  />
                ))}
              </div>
            </div>
          </div>

          <footer className="armory-ui armory-footer mt-8">
            <div className="armory-footer__bar">
              <span>HP</span>
              <div className="armory-footer__hp">
                <div className="armory-footer__hp-fill" />
              </div>
            </div>
            <div className="armory-footer__center">
              <span className="armory-footer__key">[ CLICK ]</span> INSPECT WEAPON
              <span className="armory-footer__sep">·</span>
              <span className="armory-footer__anime">照準ロック</span>
            </div>
            <div className="armory-footer__ammo">
              <span>{projects.length}</span>
              <span className="armory-footer__ammo-icon">▮▮▮</span>
            </div>
          </footer>
        </Section>
      </div>
    </>
  )
}
