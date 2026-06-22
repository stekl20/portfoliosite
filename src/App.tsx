import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { WorkList } from './components/WorkList'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme') as Theme | null
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <Header theme={theme} onToggle={setTheme} />
      <About />
      <WorkList />
    </>
  )
}
