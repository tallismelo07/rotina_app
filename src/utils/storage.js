export const storage = {
  get: (key, fallback = null) => {
    try {
      const v = localStorage.getItem(key)
      return v !== null ? JSON.parse(v) : fallback
    } catch { return fallback }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
  },
  remove: (key) => {
    try { localStorage.removeItem(key) } catch {}
  },
}

export const todayKey = (prefix = 'rotina') => {
  const d = new Date()
  return `${prefix}_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}`
}

export const dateKey = (prefix, date) => {
  return `${prefix}_${date.getFullYear()}_${date.getMonth()}_${date.getDate()}`
}
