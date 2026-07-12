import { github, social } from '@/data/siteData'
import Magnet from '@/components/react-bits/Magnet'
import SpotlightCard from '@/components/react-bits/SpotlightCard'

export default function GitHubStats() {
  return (
    <SpotlightCard
      className="group !rounded-2xl border-border/80 bg-elevated/60 p-6 sm:p-8"
      spotlightColor="rgba(124, 58, 237, 0.12)"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex shrink-0 items-center gap-4">
          <img
            src={github.avatar}
            alt={github.username}
            className="h-16 w-16 rounded-xl border border-accent/30 sm:h-20 sm:w-20"
          />
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-2">GitHub</p>
            <h3 className="mt-1 text-lg font-bold sm:text-xl">
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent-2 group-hover:text-accent-2"
              >
                @{github.username}
              </a>
            </h3>
            <p className="mt-1 max-w-sm text-sm text-muted">{github.bio}</p>
          </div>
        </div>

        <div className="flex w-full shrink-0 justify-end gap-2.5 sm:w-auto sm:gap-5">
          <div className="w-[4.25rem] shrink-0 text-center sm:w-[4.5rem]">
            <p className="text-lg font-bold text-gradient sm:text-2xl">{github.repos}</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted sm:text-xs">Repos</p>
          </div>
          <div className="w-[4.25rem] shrink-0 text-center sm:w-[4.5rem]">
            <p className="text-lg font-bold text-gradient sm:text-2xl">{github.commits}</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted sm:text-xs">Commits</p>
          </div>
          <div className="w-[4.25rem] shrink-0 text-center sm:w-[4.5rem]">
            <p className="text-lg font-bold text-gradient sm:text-2xl">{github.mergedPrs}</p>
            <p className="mt-0.5 font-mono text-[10px] leading-tight text-muted sm:text-xs">PRs merged</p>
          </div>
          <div className="w-[4.25rem] shrink-0 text-center sm:w-[4.5rem]">
            <p className="text-lg font-bold text-gradient sm:text-2xl">{github.memberSince}</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted sm:text-xs">Since</p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-border/50 pt-6">
        <Magnet magnetStrength={3} lerp={0.12}>
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-5 py-2.5 text-sm font-bold text-void"
          >
            GitHub profile ↗
          </a>
        </Magnet>
      </div>
    </SpotlightCard>
  )
}
