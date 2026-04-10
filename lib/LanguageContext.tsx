'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Lang } from './content'

export type Theme = 'light' | 'dark'

interface AppContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType>({
  lang: 'en',
  setLang: () => {},
  theme: 'light',
  toggleTheme: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')
  const [theme, setThemeState] = useState<Theme>('light')

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('phj-campaign-lang') as Lang
      if (savedLang && ['en', 'es', 'tl', 'fr'].includes(savedLang)) {
        setLangState(savedLang)
      }
      const savedTheme = localStorage.getItem('phj-campaign-theme') as Theme
      if (savedTheme === 'dark') {
        setThemeState('dark')
        document.documentElement.setAttribute('data-theme', 'dark')
      }
    } catch {
      // localStorage unavailable (SSR or private mode)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('phj-campaign-lang', l) } catch {}
  }

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setThemeState(next)
    try { localStorage.setItem('phj-campaign-theme', next) } catch {}
  }

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export function useLang() {
  return useContext(AppContext)
}

export function useTheme() {
  const { theme, toggleTheme } = useContext(AppContext)
  return { theme, toggleTheme }
}
