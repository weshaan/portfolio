export default function OrbHoverHint() {
  return (
    <div
      className="pointer-events-none absolute right-[4%] top-[22%] z-10 hidden translate-y-8 flex-row-reverse items-start gap-2 sm:translate-y-10 md:flex lg:right-[7%] xl:right-[11%]"
      aria-hidden
    >
      <p className="w-40 shrink-0 pt-1 text-left text-xs font-medium leading-snug text-white/75 lg:w-44 lg:text-sm">
        Hover the orb for something suspicious!
      </p>
      <svg
        viewBox="0 0 72 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[5.5rem] w-14 shrink-0 text-white lg:h-[6.5rem] lg:w-16"
        aria-hidden
      >
        <defs>
          <marker
            id="orb-hint-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
          </marker>
        </defs>
        <path
          d="M 66 10 C 50 12 24 42 14 78"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          markerEnd="url(#orb-hint-arrow)"
          className="text-white/90"
        />
      </svg>
    </div>
  )
}
