'use client'

import { uiLabels, t } from '@/lib/content'
import { useLang, useTheme } from '@/lib/LanguageContext'

interface HeaderProps {
  onContribute: () => void
}

export default function Header({ onContribute }: HeaderProps) {
  const { lang } = useLang()
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className="sticky top-0 z-40 w-full"
      style={{
        background: 'var(--bg-nav)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: '0 1px 0 rgba(30,50,84,0.04), 0 3px 16px rgba(30,50,84,0.06)',
        transition: 'background 0.25s ease',
      }}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[68px]">

        {/* Left — Campaign identity with Paul photo */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Circular candidate photo */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden"
            style={{
              border: '2px solid var(--sage-border)',
              boxShadow: '0 1px 6px rgba(30,50,84,0.12)',
            }}
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/paul.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name + office */}
          <div className="min-w-0 leading-none">
            <span
              className="block font-sans font-bold truncate"
              style={{
                fontSize: 'clamp(0.88rem, 2vw, 1rem)',
                color: 'var(--text-head)',
                letterSpacing: '-0.01em',
              }}
            >
              Paul Harold Johnson
            </span>
            <span
              className="block truncate mt-0.5"
              style={{
                fontSize: 'clamp(0.62rem, 1.1vw, 0.70rem)',
                color: 'var(--text-muted)',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                fontWeight: 600,
                fontFamily: 'var(--font-nunito)',
              }}
            >
              Ventura County Clerk-Recorder · 2026
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

          {/* Nonpartisan badge — desktop only */}
          <span
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{
              background: 'var(--sage-pale)',
              color: 'var(--sage-dark)',
              border: '1px solid var(--sage-border)',
              fontSize: '0.67rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-nunito)',
            }}
          >
            {t(uiLabels.nonpartisan, lang)}
          </span>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={t(uiLabels.toggleTheme, lang)}
            title={theme === 'light' ? t(uiLabels.darkMode, lang) : t(uiLabels.lightMode, lang)}
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: 'var(--bg-section)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              transition: 'background 0.2s ease, transform 0.15s ease',
              fontSize: '0.9rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.background = 'var(--sage-pale)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.background = 'var(--bg-section)'
            }}
          >
            <span aria-hidden="true">{theme === 'light' ? '🌙' : '☀️'}</span>
          </button>

          {/* Contribute CTA */}
          <button
            onClick={onContribute}
            className="btn-contribute"
            style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
            aria-label="Contribute to the Paul Harold Johnson campaign"
          >
            <span aria-hidden="true">♥</span>
            {t(uiLabels.contribute, lang)}
          </button>
        </div>
      </div>
    </header>
  )
}
