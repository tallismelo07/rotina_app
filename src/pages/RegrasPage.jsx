import { AlertTriangle, X, Calendar, Sun } from 'lucide-react'
import { RULES } from '../data/defaultData'

export function RegrasPage() {
  const sections = [
    {
      title: 'Quando sobrecarregado',
      icon: AlertTriangle,
      color: 'text-amber-500',
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      items: RULES.overloaded,
    },
    {
      title: 'O que não fazer',
      icon: X,
      color: 'text-rose-500',
      bg: 'bg-rose-50 dark:bg-rose-950/30',
      items: RULES.dont,
    },
    {
      title: 'Revisão semanal — sábado 14h',
      icon: Calendar,
      color: 'text-brand-600 dark:text-brand-400',
      bg: 'bg-brand-50 dark:bg-brand-950/30',
      items: RULES.review,
    },
  ]

  return (
    <div className="animate-fade-in space-y-5">
      {sections.map(({ title, icon: Icon, color, bg, items }) => (
        <div key={title}>
          <div className="flex items-center gap-2 mb-3">
            <Icon size={16} className={color} />
            <h3 className="text-sm font-semibold">{title}</h3>
          </div>
          <div className={`${bg} rounded-2xl p-4 space-y-2.5`}>
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${color.replace('text-', 'bg-')}`} />
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-4 border border-neutral-100 dark:border-neutral-800">
        <div className="flex items-center gap-2 mb-2">
          <Sun size={16} className="text-neutral-400" />
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Filosofia do sistema</p>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-500 leading-relaxed">
          Esse sistema não foi feito para ser perfeito — foi feito para ser real. Você tem ansiedade, trabalho, família e vida. A rotina serve você, não o contrário.
        </p>
      </div>
    </div>
  )
}
