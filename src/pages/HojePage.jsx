import { useState } from 'react'
import { Plus, Pencil, Trash2, Flame, Droplets, Brain, Zap, AlertTriangle } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { TaskModal } from '../components/TaskModal'
import { Modal } from '../components/ui/Modal'
import { getPriorityBg, getTodayDayKey, DAY_FULL } from '../utils/helpers'
import { MINIMAL_ROUTINE } from '../data/defaultData'

export function HojePage() {
  const { tasks, toggleTask, deleteTask, doneTasks, totalTasks, progress, streak, setFocusMode, selectedDate } = useApp()
  const [taskModalOpen, setTaskModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [minimalOpen, setMinimalOpen] = useState(false)
  const [swipedId, setSwipedId] = useState(null)

  const isToday = selectedDate.toDateString() === new Date().toDateString()
  const dayKey = DAY_FULL[selectedDate.getDay()]

  const essentials = tasks.filter(t => t.tag === 'essencial')
  const importants = tasks.filter(t => t.tag === 'importante')
  const optionals  = tasks.filter(t => t.tag === 'opcional')

  const openEdit = (task) => { setEditingTask(task); setTaskModalOpen(true) }

  const grouped = [
    { label: 'Essencial', items: essentials, emoji: '🔴' },
    { label: 'Importante', items: importants, emoji: '🟡' },
    { label: 'Opcional', items: optionals, emoji: '⚪' },
  ].filter(g => g.items.length > 0)

  return (
    <div className="animate-fade-in">
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-3.5">
          <div className="text-xl font-semibold">{doneTasks}/{totalTasks}</div>
          <div className="text-xs text-neutral-500 mt-0.5">Tarefas</div>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-3.5">
          <div className="text-xl font-semibold flex items-center gap-1">
            {streak}<Flame size={16} className="text-orange-400" />
          </div>
          <div className="text-xs text-neutral-500 mt-0.5">Dias seguidos</div>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-3.5">
          <div className="text-xl font-semibold">{progress}%</div>
          <div className="text-xs text-neutral-500 mt-0.5">Progresso</div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-5">
        <ProgressBar value={progress} />
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1.5">{progress}% do dia concluído — {dayKey}</p>
      </div>

      {/* Focus banner */}
      <div className="bg-violet-50 dark:bg-violet-950/40 rounded-2xl p-4 mb-5">
        <div className="flex items-start gap-3">
          <Brain size={18} className="text-violet-600 dark:text-violet-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-violet-800 dark:text-violet-200">Foco da semana</p>
            <p className="text-xs text-violet-600 dark:text-violet-400 mt-0.5">Retomar JavaScript — 1 bloco por dia, sem pular</p>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-2.5 mb-5">
        <button
          onClick={() => setFocusMode(true)}
          className="flex items-center gap-2.5 bg-neutral-50 dark:bg-neutral-900 rounded-2xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors active:scale-95"
        >
          <Zap size={16} className="text-amber-500" />
          Modo foco
        </button>
        <button
          onClick={() => setMinimalOpen(true)}
          className="flex items-center gap-2.5 bg-neutral-50 dark:bg-neutral-900 rounded-2xl px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors active:scale-95"
        >
          <AlertTriangle size={16} className="text-rose-400" />
          Dia difícil
        </button>
      </div>

      {/* Task groups */}
      {tasks.length === 0 ? (
        <div className="text-center py-12 text-neutral-400 dark:text-neutral-600">
          <p className="text-sm">Nenhuma tarefa para hoje.</p>
          <p className="text-xs mt-1">Toque no + para adicionar.</p>
        </div>
      ) : (
        grouped.map(group => (
          <div key={group.label} className="mb-5">
            <h3 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2.5 px-1">
              {group.emoji} {group.label}
            </h3>
            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-100 dark:border-neutral-800 overflow-hidden">
              {group.items.map((task, i) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  isLast={i === group.items.length - 1}
                  onToggle={() => toggleTask(task.id)}
                  onEdit={() => openEdit(task)}
                  onDelete={() => deleteTask(task.id)}
                  swiped={swipedId === task.id}
                  onSwipe={() => setSwipedId(swipedId === task.id ? null : task.id)}
                />
              ))}
            </div>
          </div>
        ))
      )}

      {/* FAB */}
      <button
        onClick={() => { setEditingTask(null); setTaskModalOpen(true) }}
        className="fixed bottom-28 right-5 w-14 h-14 bg-brand-600 text-white rounded-2xl shadow-lg flex items-center justify-center hover:bg-brand-800 transition-colors active:scale-95 z-40"
        aria-label="Nova tarefa"
      >
        <Plus size={24} />
      </button>

      <TaskModal
        open={taskModalOpen}
        onClose={() => { setTaskModalOpen(false); setEditingTask(null) }}
        editingTask={editingTask}
      />

      <Modal open={minimalOpen} onClose={() => setMinimalOpen(false)} title="Rotina mínima — dia difícil">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Quando estiver sobrecarregado, foque só no essencial:</p>
        <div className="space-y-2">
          {MINIMAL_ROUTINE.map(item => (
            <div key={item.id} className="flex items-center gap-3 py-2.5 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
              <div className="w-2 h-2 rounded-full bg-brand-400 flex-shrink-0" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl">
          <p className="text-xs text-amber-700 dark:text-amber-300">Falhou hoje? Sem culpa. Só retoma amanhã. Consistência é mais importante que intensidade.</p>
        </div>
      </Modal>
    </div>
  )
}

function TaskItem({ task, isLast, onToggle, onEdit, onDelete, swiped, onSwipe }) {
  return (
    <div className={`relative overflow-hidden ${!isLast ? 'border-b border-neutral-100 dark:border-neutral-800' : ''}`}>
      {/* Swipe actions */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center gap-1 pr-3 bg-white dark:bg-neutral-900">
        <button onClick={onEdit} className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
          <Pencil size={13} className="text-neutral-500" />
        </button>
        <button onClick={onDelete} className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 dark:hover:bg-rose-900/50 transition-colors">
          <Trash2 size={13} className="text-rose-500" />
        </button>
      </div>

      {/* Main content */}
      <div
        className={`flex items-center gap-3 px-4 py-3.5 bg-white dark:bg-neutral-900 transition-transform duration-200 ${swiped ? '-translate-x-20' : 'translate-x-0'}`}
        onContextMenu={e => { e.preventDefault(); onSwipe() }}
      >
        <button
          onClick={onToggle}
          className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
            task.done
              ? 'bg-brand-600 border-brand-600'
              : 'border-neutral-300 dark:border-neutral-600'
          }`}
        >
          {task.done && (
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
              <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0" onClick={onToggle}>
          <p className={`text-sm leading-tight ${task.done ? 'line-through text-neutral-400 dark:text-neutral-600' : ''}`}>
            {task.label}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${getPriorityBg(task.tag)}`}>
            {task.tag}
          </span>
          <button onClick={onSwipe} className="p-1 text-neutral-300 dark:text-neutral-600">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="3" r="1" fill="currentColor"/>
              <circle cx="7" cy="7" r="1" fill="currentColor"/>
              <circle cx="7" cy="11" r="1" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
