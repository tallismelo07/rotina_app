import { useState, useEffect } from 'react'
import { X, Timer } from 'lucide-react'
import { useApp } from '../context/AppContext'

export function FocusMode() {
  const { focusMode, setFocusMode } = useApp()
  const [seconds, setSeconds] = useState(25 * 60)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return
    const interval = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) { setRunning(false); return 25 * 60 }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [running])

  useEffect(() => {
    if (!focusMode) { setRunning(false); setSeconds(25 * 60) }
  }, [focusMode])

  if (!focusMode) return null

  const min = Math.floor(seconds / 60).toString().padStart(2, '0')
  const sec = (seconds % 60).toString().padStart(2, '0')
  const progress = ((25 * 60 - seconds) / (25 * 60)) * 100

  return (
    <div className="fixed inset-0 z-50 bg-brand-900 flex flex-col items-center justify-center text-white animate-fade-in">
      <button
        onClick={() => setFocusMode(false)}
        className="absolute top-6 right-6 p-2 rounded-xl hover:bg-white/10 transition-colors"
      >
        <X size={22} />
      </button>

      <Timer size={32} className="mb-8 opacity-60" />

      <div className="text-7xl font-light tracking-tight mb-2">{min}:{sec}</div>
      <p className="text-white/50 text-sm mb-10">Modo foco · Pomodoro 25min</p>

      <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden mb-10">
        <div
          className="h-full bg-white rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setRunning(r => !r)}
          className="px-8 py-3 bg-white text-brand-900 rounded-2xl text-sm font-semibold hover:bg-white/90 transition-colors"
        >
          {running ? 'Pausar' : 'Iniciar'}
        </button>
        <button
          onClick={() => { setRunning(false); setSeconds(25 * 60) }}
          className="px-5 py-3 bg-white/10 rounded-2xl text-sm hover:bg-white/20 transition-colors"
        >
          Resetar
        </button>
      </div>

      <p className="mt-12 text-white/30 text-xs text-center px-8">
        Feche as abas, coloque fone, foque só no JavaScript.
      </p>
    </div>
  )
}
