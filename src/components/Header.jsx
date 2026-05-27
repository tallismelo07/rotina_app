import { useState } from 'react'
import { Sun, Moon, ChevronDown, Droplets } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { Calendar } from './Calendar'
import { getGreeting, formatDate, DAY_FULL } from '../utils/helpers'

export function Header() {
  const { darkMode, setDarkMode, selectedDate } = useApp()
  const [calOpen, setCalOpen] = useState(false)
  const isToday = selectedDate.toDateString() === new Date().toDateString()

  return (
    <>
      <header className="px-5 pt-12 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mb-0.5">
              {isToday ? getGreeting() : DAY_FULL[selectedDate.getDay()]}
            </p>
            <button
              onClick={() => setCalOpen(true)}
              className="flex items-center gap-1.5 group"
            >
              <h1 className="text-2xl font-semibold tracking-tight">
                {isToday ? 'Hoje' : formatDate(selectedDate)}
              </h1>
              <ChevronDown size={18} className="text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors mt-0.5" />
            </button>
          </div>

          <button
            onClick={() => setDarkMode(d => !d)}
            className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Alternar tema"
          >
            {darkMode
              ? <Sun size={18} className="text-amber-500" />
              : <Moon size={18} className="text-neutral-600" />
            }
          </button>
        </div>
      </header>

      <Calendar open={calOpen} onClose={() => setCalOpen(false)} />
    </>
  )
}
