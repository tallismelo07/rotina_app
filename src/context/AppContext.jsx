import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { storage, dateKey } from '../utils/storage'
import { DEFAULT_CHECKLIST, DEFAULT_SCHEDULE } from '../data/defaultData'
import { uid, DAY_NAMES } from '../utils/helpers'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() =>
    storage.get('darkMode', window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [activeTab, setActiveTab] = useState('hoje')
  const [focusMode, setFocusMode] = useState(false)

  // Tasks per day
  const getTasksForDate = useCallback((date) => {
    const key = dateKey('tasks', date)
    const saved = storage.get(key)
    if (saved) return saved
    // Default checklist only for today
    const today = new Date()
    if (isSameDayCheck(date, today)) {
      return DEFAULT_CHECKLIST.map(t => ({ ...t }))
    }
    return []
  }, [])

  const [tasks, setTasksState] = useState(() => getTasksForDate(new Date()))

  const saveTasks = useCallback((date, newTasks) => {
    const key = dateKey('tasks', date)
    storage.set(key, newTasks)
  }, [])

  const setTasks = useCallback((newTasks) => {
    setTasksState(newTasks)
    saveTasks(selectedDate, newTasks)
  }, [selectedDate, saveTasks])

  // Schedule
  const [schedule, setScheduleState] = useState(() =>
    storage.get('schedule', DEFAULT_SCHEDULE)
  )

  const setSchedule = useCallback((newSchedule) => {
    setScheduleState(newSchedule)
    storage.set('schedule', newSchedule)
  }, [])

  // Streak
  const [streak, setStreak] = useState(() => storage.get('streak', 0))

  // Dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    storage.set('darkMode', darkMode)
  }, [darkMode])

  // Load tasks when date changes
  useEffect(() => {
    setTasksState(getTasksForDate(selectedDate))
  }, [selectedDate, getTasksForDate])

  // Streak calculation
  useEffect(() => {
    const today = new Date()
    const key = dateKey('tasks', today)
    const todayTasks = storage.get(key, [])
    const essentials = todayTasks.filter(t => t.tag === 'essencial')
    const allDone = essentials.length > 0 && essentials.every(t => t.done)
    if (allDone) {
      const lastStreak = storage.get('lastStreakDate', '')
      const todayStr = today.toDateString()
      if (lastStreak !== todayStr) {
        const newStreak = streak + 1
        setStreak(newStreak)
        storage.set('streak', newStreak)
        storage.set('lastStreakDate', todayStr)
      }
    }
  }, [tasks])

  const toggleTask = useCallback((id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }, [tasks, setTasks])

  const addTask = useCallback((label, tag = 'importante') => {
    const newTask = { id: uid(), label, tag, done: false }
    setTasks([...tasks, newTask])
  }, [tasks, setTasks])

  const editTask = useCallback((id, updates) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, ...updates } : t))
  }, [tasks, setTasks])

  const deleteTask = useCallback((id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }, [tasks, setTasks])

  const addScheduleBlock = useCallback((dayKey, block) => {
    const newBlock = { ...block, id: uid() }
    setSchedule({
      ...schedule,
      [dayKey]: [...(schedule[dayKey] || []), newBlock],
    })
  }, [schedule, setSchedule])

  const editScheduleBlock = useCallback((dayKey, id, updates) => {
    setSchedule({
      ...schedule,
      [dayKey]: schedule[dayKey].map(b => b.id === id ? { ...b, ...updates } : b),
    })
  }, [schedule, setSchedule])

  const deleteScheduleBlock = useCallback((dayKey, id) => {
    setSchedule({
      ...schedule,
      [dayKey]: schedule[dayKey].filter(b => b.id !== id),
    })
  }, [schedule, setSchedule])

  const doneTasks = tasks.filter(t => t.done).length
  const totalTasks = tasks.length
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  return (
    <AppContext.Provider value={{
      darkMode, setDarkMode,
      selectedDate, setSelectedDate,
      activeTab, setActiveTab,
      focusMode, setFocusMode,
      tasks, toggleTask, addTask, editTask, deleteTask,
      schedule, addScheduleBlock, editScheduleBlock, deleteScheduleBlock,
      streak,
      doneTasks, totalTasks, progress,
    }}>
      {children}
    </AppContext.Provider>
  )
}

function isSameDayCheck(a, b) {
  return a.getDate() === b.getDate() &&
    a.getMonth() === b.getMonth() &&
    a.getFullYear() === b.getFullYear()
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be inside AppProvider')
  return ctx
}
