import { Target, TrendingUp, Rocket } from 'lucide-react'
import { GOALS } from '../data/defaultData'

const sections = [
  { key: 'short', label: 'Curto prazo', sub: '1 a 4 semanas', icon: Target, color: 'text-rose-500', badge: 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300', dot: 'bg-rose-400' },
  { key: 'mid', label: 'Médio prazo', sub: '1 a 3 meses', icon: TrendingUp, color: 'text-amber-500', badge: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300', dot: 'bg-amber-400' },
  { key: 'long', label: 'Longo prazo', sub: '6 a 12 meses', icon: Rocket, color: 'text-emerald-500', badge: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300', dot: 'bg-emerald-400' },
]

export function MetasPage() {
  return (
    <div className="animate-fade-in space-y-5">
      {sections.map(({ key, label, sub, icon: Icon, color, badge, dot }) => (
        <div key={key}>
          <div className="flex items-center gap-2 mb-3">
            <Icon size={16} className={color} />
            <h3 className="text-sm font-semibold">{label}</h3>
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${badge}`}>{sub}</span>
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden">
            {GOALS[key].map((goal, i) => (
              <div key={i} className={`flex items-start gap-3 px-4 py-3.5 ${i < GOALS[key].length - 1 ? 'border-b border-neutral-100 dark:border-neutral-800' : ''}`}>
                <div className={`w-2 h-2 rounded-full ${dot} flex-shrink-0 mt-1.5`} />
                <div>
                  <p className="text-sm font-medium">{goal.title}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">{goal.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="bg-brand-50 dark:bg-brand-950/40 rounded-2xl p-4">
        <p className="text-xs font-medium text-brand-800 dark:text-brand-200 mb-1">Lembre-se</p>
        <p className="text-xs text-brand-600 dark:text-brand-400 leading-relaxed">
          Sua experiência em suporte/implantação é um diferencial real. Você entende o contexto de negócio — muitos devs não têm isso.
        </p>
      </div>
    </div>
  )
}
