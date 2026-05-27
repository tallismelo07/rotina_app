import { CheckSquare, Calendar, Target, BookOpen } from 'lucide-react'
import { useApp } from '../context/AppContext'

const tabs = [
  { key: 'hoje',   label: 'Hoje',   icon: CheckSquare },
  { key: 'rotina', label: 'Rotina', icon: Calendar },
  { key: 'metas',  label: 'Metas',  icon: Target },
  { key: 'regras', label: 'Regras', icon: BookOpen },
]

export function BottomNav() {
  const { activeTab, setActiveTab } = useApp()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-t border-neutral-100 dark:border-neutral-800 safe-bottom">
      <div className="flex max-w-md mx-auto">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = activeTab === key
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="flex-1 flex flex-col items-center gap-1.5 py-3.5 transition-all active:scale-95"
            >
              <Icon
                size={24}
                className={active ? 'text-brand-600 dark:text-brand-400' : 'text-neutral-400 dark:text-neutral-600'}
                strokeWidth={active ? 2.2 : 1.8}
              />
              <span className={`text-[11px] font-medium ${active ? 'text-brand-600 dark:text-brand-400' : 'text-neutral-400 dark:text-neutral-600'}`}>
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
