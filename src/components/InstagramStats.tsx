import { instagram, social } from '@/data/siteData'
import Magnet from '@/components/react-bits/Magnet'
import SpotlightCard from '@/components/react-bits/SpotlightCard'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </svg>
  )
}

export default function InstagramStats() {
  return (
    <SpotlightCard
      className="group !rounded-2xl border-border/80 bg-elevated/60 p-6 sm:p-8"
      spotlightColor="rgba(168, 85, 247, 0.12)"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex shrink-0 items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-accent-3/40 bg-gradient-to-br from-accent-3/25 via-accent/15 to-accent-2/20 sm:h-20 sm:w-20">
            <InstagramIcon className="h-8 w-8 text-accent-3 sm:h-9 sm:w-9" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent-3">Instagram</p>
            <h3 className="mt-1 text-lg font-bold sm:text-xl">
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent-3 group-hover:text-accent-3"
              >
                {instagram.name}
              </a>
            </h3>
            <p className="mt-0.5 font-mono text-sm text-muted">@{instagram.username}</p>
            <p className="mt-1 max-w-sm text-sm text-muted">{instagram.bio}</p>
          </div>
        </div>

        <div className="flex w-full shrink-0 justify-end gap-2.5 sm:w-auto sm:gap-5">
          <div className="w-[4.25rem] shrink-0 text-center sm:w-[4.5rem]">
            <p className="text-lg font-bold text-gradient sm:text-2xl">{instagram.views}</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted sm:text-xs">Views</p>
          </div>
          <div className="w-[4.25rem] shrink-0 text-center sm:w-[4.5rem]">
            <p className="text-lg font-bold text-gradient sm:text-2xl">{instagram.posts}</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted sm:text-xs">Posts</p>
          </div>
          <div className="w-[4.25rem] shrink-0 text-center sm:w-[4.5rem]">
            <p className="text-lg font-bold text-gradient sm:text-2xl">{instagram.followers}</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted sm:text-xs">Followers</p>
          </div>
          <div className="w-[4.25rem] shrink-0 text-center sm:w-[4.5rem]">
            <p className="text-lg font-bold text-gradient sm:text-2xl">{instagram.activeSince}</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted sm:text-xs">Since</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-border/50 pt-6">
        <Magnet magnetStrength={3} lerp={0.12}>
          <a
            href={social.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-3 to-accent px-5 py-2.5 text-sm font-bold text-void"
          >
            Instagram profile ↗
          </a>
        </Magnet>
      </div>
    </SpotlightCard>
  )
}
