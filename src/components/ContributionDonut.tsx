import { useScrollReveal } from '../hooks/useScrollReveal'

interface ContributionDonutProps {
  percentage: number
  label?: string
}

export default function ContributionDonut({ percentage, label = 'My Contribution' }: ContributionDonutProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  const size = 140
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - (visible ? percentage : 0) / 100)

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={strokeWidth} className="stroke-line" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="stroke-primary transition-[stroke-dashoffset] duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-xl font-black text-fg">{percentage}%</span>
        </div>
      </div>
      <p className="font-display text-xs font-semibold tracking-widest uppercase text-muted">{label}</p>
    </div>
  )
}
