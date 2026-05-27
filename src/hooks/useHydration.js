import { useState, useEffect } from 'react'

export function useHydration() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const interval = setInterval(() => {
      setShow(true)
    }, 60 * 60 * 1000) // every hour
    return () => clearInterval(interval)
  }, [dismissed])

  const dismiss = () => {
    setShow(false)
    setDismissed(true)
    setTimeout(() => setDismissed(false), 60 * 60 * 1000)
  }

  return { show, dismiss }
}
