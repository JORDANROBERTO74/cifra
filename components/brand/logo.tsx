import { cn } from "@/lib/utils"

export function CifraMark({
  className,
}: {
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      <path
        d="M15.5 2.5C8 7.5 5 14.2 5 20.3 5 25.8 9.3 30 14.5 30c6.7 0 12-5.4 12-11.9 0-6.4-4.3-12.3-11-15.6z"
        fill="#138E5E"
      />
      <path
        d="M16 2.5v27.5"
        stroke="#052618"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 8.5l3.8 3.8M16 14.2l-3.4 3.4M16 19.5l3.8 3.8"
        stroke="#052618"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CifraLogo({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <CifraMark className="h-7 w-7 shrink-0 lg:h-8 lg:w-8" />
      {!compact && (
        <span className="font-onest text-[22px] font-semibold leading-none tracking-tight text-[#052618] lg:text-2xl">
          Cifra
        </span>
      )}
    </span>
  )
}
