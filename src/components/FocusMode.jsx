import { useState, useEffect } from 'react'
import { X, Timer } from 'lucide-react'
import { useApp } from '../context/AppContext'

export function FocusMode() {
  const { focusMode, setFocusMode } = useApp()
  const [seconds, setSeconds] = useState(25 * 60)
  const [running, setRunning] = useState(false)
  const [photoOpen, setPhotoOpen] = useState(false)

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
    if (!focusMode) { setRunning(false); setSeconds(25 * 60); setPhotoOpen(false) }
  }, [focusMode])

  if (!focusMode) return null

  const min = Math.floor(seconds / 60).toString().padStart(2, '0')
  const sec = (seconds % 60).toString().padStart(2, '0')
  const progress = ((25 * 60 - seconds) / (25 * 60)) * 100

  return (
    <div className="fixed inset-0 z-50 bg-brand-900 text-white animate-fade-in">

      {/* Foto fullscreen */}
      {photoOpen && (
        <div className="absolute inset-0 z-10 bg-black animate-fade-in flex items-center justify-center">
          <button
            onClick={() => setPhotoOpen(false)}
            className="absolute top-safe right-5 p-3 rounded-2xl bg-white/20 active:bg-white/30 transition-colors"
            aria-label="Fechar foto"
          >
            <X size={22} />
          </button>
          <div className="w-full h-full bg-gradient-to-br from-violet-600 via-brand-500 to-indigo-700" />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-white/90 text-2xl font-semibold tracking-tight px-10 text-center leading-snug">
              Você vai chegar lá.
            </p>
            <p className="text-white/50 text-sm mt-3 px-12 text-center leading-relaxed">
              Cada bloco de estudo é um tijolo.
            </p>
          </div>
        </div>
      )}

      {/* Timer principal */}
      <div className="flex flex-col items-center justify-center h-full px-6">
        {/* Botão fechar */}
        <button
          onClick={() => setFocusMode(false)}
          className="absolute top-safe right-5 p-2.5 rounded-xl hover:bg-white/10 active:bg-white/20 transition-colors"
          aria-label="Fechar modo foco"
        >
          <X size={22} />
        </button>

        <Timer size={28} className="mb-6 opacity-50" />

        <div className="text-[72px] font-light tracking-tight leading-none mb-2">
          {min}:{sec}
        </div>
        <p className="text-white/50 text-sm mb-8">Modo foco · Pomodoro 25min</p>

        <div className="w-52 h-1 bg-white/20 rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-white rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex gap-3 mb-10">
          <button
            onClick={() => setRunning(r => !r)}
            className="px-8 py-3.5 bg-white text-brand-900 rounded-2xl text-sm font-semibold hover:bg-white/90 active:scale-95 transition-all"
          >
            {running ? 'Pausar' : 'Iniciar'}
          </button>
          <button
            onClick={() => { setRunning(false); setSeconds(25 * 60) }}
            className="px-5 py-3.5 bg-white/10 rounded-2xl text-sm hover:bg-white/20 active:scale-95 transition-all"
          >
            Resetar
          </button>
        </div>

        {/* Foto motivacional — toque para tela cheia */}
        <button
          onClick={() => setPhotoOpen(true)}
          className="w-24 h-16 rounded-2xl overflow-hidden opacity-60 hover:opacity-90 active:scale-95 transition-all"
          aria-label="Abrir foto motivacional em tela cheia"
        >
          <div className="w-full h-full bg-gradient-to-br from-violet-500 via-brand-400 to-indigo-600" />
        </button>
        <p className="text-white/30 text-[11px] mt-2 mb-6">Toque na foto</p>

        <p className="text-white/30 text-xs text-center px-8">
          Feche as abas, coloque fone, foque só no JavaScript.
        </p>
      </div>
    </div>
  )
}
