import { AppProvider, useApp } from './context/AppContext'
import { Header } from './components/Header'
import { BottomNav } from './components/BottomNav'
import { FocusMode } from './components/FocusMode'
import { HojePage } from './pages/HojePage'
import { RotinaPage } from './pages/RotinaPage'
import { MetasPage } from './pages/MetasPage'
import { RegrasPage } from './pages/RegrasPage'

function AppContent() {
  const { activeTab } = useApp()

  const pages = {
    hoje:   <HojePage />,
    rotina: <RotinaPage />,
    metas:  <MetasPage />,
    regras: <RegrasPage />,
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-md mx-auto">
        <Header />
        <main className="px-5 pb-32">
          {pages[activeTab]}
        </main>
      </div>
      <BottomNav />
      <FocusMode />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
