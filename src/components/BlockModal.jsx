import { useState, useEffect } from 'react'
import { Modal } from './ui/Modal'
import { Button } from './ui/Button'
import { useApp } from '../context/AppContext'
import { COLORS } from '../data/defaultData'

export function BlockModal({ open, onClose, dayKey, editingBlock = null }) {
  const { addScheduleBlock, editScheduleBlock } = useApp()
  const [time, setTime] = useState('')
  const [title, setTitle] = useState('')
  const [sub, setSub] = useState('')
  const [color, setColor] = useState('gray')

  useEffect(() => {
    if (editingBlock) {
      setTime(editingBlock.time || '')
      setTitle(editingBlock.title || '')
      setSub(editingBlock.sub || '')
      setColor(editingBlock.color || 'gray')
    } else {
      setTime(''); setTitle(''); setSub(''); setColor('gray')
    }
  }, [editingBlock, open])

  const submit = () => {
    if (!title.trim()) return
    const block = { time: time.trim(), title: title.trim(), sub: sub.trim(), color }
    if (editingBlock) {
      editScheduleBlock(dayKey, editingBlock.id, block)
    } else {
      addScheduleBlock(dayKey, block)
    }
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title={editingBlock ? 'Editar bloco' : 'Novo bloco'}>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">Horário</label>
          <input
            value={time}
            onChange={e => setTime(e.target.value)}
            placeholder="Ex: 06h00 – 07h00"
            className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm outline-none focus:ring-2 focus:ring-brand-400 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">Título</label>
          <input
            autoFocus
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            placeholder="Nome do bloco"
            className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm outline-none focus:ring-2 focus:ring-brand-400 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1.5">Descrição (opcional)</label>
          <input
            value={sub}
            onChange={e => setSub(e.target.value)}
            placeholder="Detalhes ou observação"
            className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm outline-none focus:ring-2 focus:ring-brand-400 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">Categoria</label>
          <div className="grid grid-cols-4 gap-2">
            {COLORS.map(c => (
              <button
                key={c.key}
                onClick={() => setColor(c.key)}
                className={`flex flex-col items-center gap-1 py-2 rounded-xl border text-xs transition-all ${
                  color === c.key
                    ? 'border-brand-600 bg-brand-50 dark:bg-brand-950/50'
                    : 'border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                }`}
              >
                <span className={`w-3 h-3 rounded-full ${c.dot}`} />
                <span className="text-neutral-600 dark:text-neutral-400">{c.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <Button variant="ghost" onClick={onClose} className="flex-1">Cancelar</Button>
          <Button variant="primary" onClick={submit} className="flex-1" disabled={!title.trim()}>
            {editingBlock ? 'Salvar' : 'Adicionar'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
