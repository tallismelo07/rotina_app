import { useState, useEffect } from 'react'
import { Modal } from './ui/Modal'
import { Button } from './ui/Button'
import { useApp } from '../context/AppContext'

const PRIORITIES = [
  { key: 'essencial', label: 'Essencial', color: 'text-rose-500' },
  { key: 'importante', label: 'Importante', color: 'text-amber-500' },
  { key: 'opcional', label: 'Opcional', color: 'text-neutral-400' },
]

export function TaskModal({ open, onClose, editingTask = null }) {
  const { addTask, editTask } = useApp()
  const [label, setLabel] = useState('')
  const [tag, setTag] = useState('importante')

  useEffect(() => {
    if (editingTask) {
      setLabel(editingTask.label)
      setTag(editingTask.tag)
    } else {
      setLabel('')
      setTag('importante')
    }
  }, [editingTask, open])

  const submit = () => {
    if (!label.trim()) return
    if (editingTask) {
      editTask(editingTask.id, { label: label.trim(), tag })
    } else {
      addTask(label.trim(), tag)
    }
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title={editingTask ? 'Editar tarefa' : 'Nova tarefa'}>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">Descrição</label>
          <input
            autoFocus
            value={label}
            onChange={e => setLabel(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            placeholder="O que você precisa fazer?"
            className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm outline-none focus:ring-2 focus:ring-brand-400 dark:focus:ring-brand-500 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">Prioridade</label>
          <div className="grid grid-cols-3 gap-2">
            {PRIORITIES.map(p => (
              <button
                key={p.key}
                onClick={() => setTag(p.key)}
                className={`py-2 rounded-xl text-xs font-medium border transition-all ${
                  tag === p.key
                    ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-brand-300'
                    : 'border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          <Button variant="ghost" onClick={onClose} className="flex-1">Cancelar</Button>
          <Button variant="primary" onClick={submit} className="flex-1" disabled={!label.trim()}>
            {editingTask ? 'Salvar' : 'Adicionar'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
