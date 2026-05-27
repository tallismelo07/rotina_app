export function ProgressBar({ value = 0, className = '' }) {
  return (
    <div className={`h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-brand-600 rounded-full transition-all duration-500"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
