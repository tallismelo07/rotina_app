export function Badge({ children, color = 'gray' }) {
  const colors = {
    gray:   'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300',
    purple: 'bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300',
    green:  'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300',
    amber:  'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300',
    teal:   'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300',
    coral:  'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300',
    blue:   'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300',
  }
  return (
    <span className={`inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full ${colors[color] || colors.gray}`}>
      {children}
    </span>
  )
}
