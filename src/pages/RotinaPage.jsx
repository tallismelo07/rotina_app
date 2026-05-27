import { useState } from 'react'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { useApp } from '../context/AppContext'
import { BlockModal } from '../components/BlockModal'
import { Button } from '../components/ui/Button'
import { COLORS } from '../data/defaultData'
import { DAY_LABELS, DAY_NAMES, getTodayDayKey } from '../utils/helpers'

const getColorClasses = (colorKey) => {
  const c = COLORS.find(x => x.key === colorKey) || COLORS[4]
  return { bg: c.bg, text: c.text }
}

export function RotinaPage() {
  const { schedule, deleteScheduleBlock } = useApp()
  const [activeDay, setActiveDay] = useState(getTodayDayKey())
  const [blockModalOpen, setBlockModalOpen] = useState(false)
  const [editingBlock, setEditingBlock] = useState(null)

  const blocks = schedule[activeDay] || []

  const openEdit = (block) => { setEditingBlock(block); setBlockModalOpen(true) }
  const openAdd = () => { setEditingBlock(null); setBlockModalOpen(true) }

  return (
    <div className="animate-fade-in">
      {/* Day tabs */}
      <div className="flex gap-1.5 mb-5 overflow-x-auto pb-1">
        {DAY_NAMES.map((day, i) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all active:scale-95 ${
              activeDay === day
                ? 'bg-brand-600 text-white'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
          >
            {DAY_LABELS[i]}
          </button>
        ))}
      </div>

      {/* Add block button */}
      <button
        onClick={openAdd}
        className="w-full flex items-center gap-2 py-3 px-4 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-700 text-sm text-neutral-400 dark:text-neutral-500 hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-4"
      >
        <Plus size={16} />
        Adicionar bloco
      </button>

      {/* Blocks */}
      {blocks.length === 0 ? (
        <div className="text-center py-12 text-neutral-400 dark:text-neutral-600">
          <p className="text-sm">Nenhum bloco de rotina.</p>
          <p className="text-xs mt-1">Adicione um bloco acima.</p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {blocks.map(block => {
            const { bg, text } = getColorClasses(block.color)
            return (
              <div key={block.id} className={`${bg} rounded-2xl p-4 group`}>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    {block.time && (
                      <p className={`text-xs font-medium ${text} opacity-60 mb-0.5`}>{block.time}</p>
                    )}
                    <p className={`text-sm font-medium ${text}`}>{block.title}</p>
                    {block.sub && (
                      <p className={`text-xs ${text} opacity-60 mt-0.5`}>{block.sub}</p>
                    )}
                  </div>
                  <div className="flex gap-1.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openEdit(block)}
                      className="p-1.5 rounded-lg bg-white/40 dark:bg-black/20 hover:bg-white/60 transition-colors"
                    >
                      <Pencil size={12} className={text} />
                    </button>
                    <button
                      onClick={() => deleteScheduleBlock(activeDay, block.id)}
                      className="p-1.5 rounded-lg bg-white/40 dark:bg-black/20 hover:bg-rose-100/60 transition-colors"
                    >
                      <Trash2 size={12} className="text-rose-500" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <BlockModal
        open={blockModalOpen}
        onClose={() => { setBlockModalOpen(false); setEditingBlock(null) }}
        dayKey={activeDay}
        editingBlock={editingBlock}
      />
    </div>
  )
}
