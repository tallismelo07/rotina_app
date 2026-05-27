export const DAY_NAMES = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']
export const DAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
export const DAY_FULL = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
export const MONTHS = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez']
export const MONTHS_FULL = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

export const getTodayDayKey = () => DAY_NAMES[new Date().getDay()]

export const formatDate = (date) =>
  `${date.getDate()} de ${MONTHS_FULL[date.getMonth()]}`

export const isSameDay = (a, b) =>
  a.getDate() === b.getDate() &&
  a.getMonth() === b.getMonth() &&
  a.getFullYear() === b.getFullYear()

export const getGreeting = () => {
  const h = new Date().getHours()
  if (h < 12) return 'Bom dia'
  if (h < 18) return 'Boa tarde'
  return 'Boa noite'
}

export const uid = () => Math.random().toString(36).slice(2, 9)

export const getPriorityColor = (tag) => {
  if (tag === 'essencial') return 'text-rose-500 dark:text-rose-400'
  if (tag === 'importante') return 'text-amber-500 dark:text-amber-400'
  return 'text-neutral-400 dark:text-neutral-500'
}

export const getPriorityBg = (tag) => {
  if (tag === 'essencial') return 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300'
  if (tag === 'importante') return 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300'
  return 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400'
}
