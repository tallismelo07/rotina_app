import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Modal } from './ui/Modal'
import { useApp } from '../context/AppContext'
import { MONTHS_FULL, DAY_LABELS, isSameDay } from '../utils/helpers'
import { dateKey } from '../utils/storage'
import { storage } from '../utils/storage'

export function Calendar({ open, onClose }) {
  const { selectedDate, setSelectedDate } = useApp()
  const [view, setView] = useState(new Date())

  const year = view.getFullYear()
  const month = view.getMonth()

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const today = new Date()

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d))

  const hasActivity = (date) => {
    if (!date) return false
    const key = dateKey('tasks', date)
    const tasks = storage.get(key, [])
    return tasks.some(t => t.done)
  }

  const select = (date) => {
    setSelectedDate(date)
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Calendário">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setView(new Date(year, month - 1, 1))}
          className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="text-sm font-medium">{MONTHS_FULL[month]} {year}</span>
        <button
          onClick={() => setView(new Date(year, month + 1, 1))}
          className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_LABELS.map(d => (
          <div key={d} className="text-center text-[11px] font-medium text-neutral-400 dark:text-neutral-500 py-1">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) return <div key={i} />
          const isToday = isSameDay(date, today)
          const isSelected = isSameDay(date, selectedDate)
          const active = hasActivity(date)
          return (
            <button
              key={i}
              onClick={() => select(date)}
              className={`
                relative aspect-square flex flex-col items-center justify-center rounded-xl text-sm transition-all active:scale-95
                ${isSelected ? 'bg-brand-600 text-white font-medium' : isToday ? 'bg-brand-50 dark:bg-brand-900/40 text-brand-800 dark:text-brand-200 font-medium' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300'}
              `}
            >
              {date.getDate()}
              {active && !isSelected && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-600 dark:bg-brand-400" />
              )}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => { setSelectedDate(today); onClose() }}
        className="mt-4 w-full py-2 text-sm text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-950/40 rounded-xl transition-colors"
      >
        Ir para hoje
      </button>
    </Modal>
  )
}
