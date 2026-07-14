import SectionHeading from '@/components/SectionHeading'
import FlowingMenu from '@/components/react-bits/FlowingMenu'
import Reveal from '@/components/Reveal'
import { PageContainer, Section } from '@/components/layout/PageContainer'
import { projects } from '@/data/siteData'

const menuItems = projects.map((project) => ({
  link: project.github && project.github !== '#' ? project.github : project.link ?? '#',
  text: project.title,
  image: project.image,
  external: Boolean(project.github && project.github !== '#'),
}))

export default function Projects() {
  return (
    <Section tight bleed className="pb-20 md:pb-28">
      <PageContainer>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Hover a project to explore"
        />
      </PageContainer>

      <Reveal>
        <div className="w-full" style={{ height: `${projects.length * 7.5}vh` }}>
          <FlowingMenu
            items={menuItems}
            speed={12}
            bgColor="transparent"
            textColor="#ececf4"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#050508"
            borderColor="rgba(255, 255, 255, 0.22)"
          />
        </div>
      </Reveal>
    </Section>
  )
}
