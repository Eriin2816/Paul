'use client'

import { langLabels, uiLabels, t, type Lang } from '@/lib/content'
import { useLang, useTheme } from '@/lib/LanguageContext'

interface FooterProps {
  onContact: () => void
}

const LANGS: Lang[] = ['en', 'es', 'tl', 'fr']

export default function Footer({ onContact }: FooterProps) {
  const { lang, setLang } = useLang()
  const { theme, toggleTheme } = useTheme()

  return (
    <footer
      style={{
        background: 'var(--bg-section)',
        borderTop: '1px solid var(--border)',
        transition: 'background 0.25s ease',
      }}
      role="contentinfo"
    >
      {/* Sage green top accent rule */}
      <div
        aria-hidden="true"
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, var(--sage-light) 0%, var(--sage) 40%, var(--navy) 75%, transparent 100%)',
          opacity: 0.6,
        }}
      />

      {/* Main footer content */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Campaign identity */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
                style={{
                  border: '2px solid var(--sage-border)',
                  boxShadow: '0 1px 4px rgba(30,50,84,0.10)',
                }}
                aria-hidden="true"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/paul.jpeg" alt="" className="w-full h-full object-cover" />
              </div>
              <p
                className="font-sans font-bold"
                style={{ fontSize: '0.95rem', color: 'var(--text-head)', letterSpacing: '-0.01em' }}
              >
                Paul Harold Johnson
              </p>
            </div>
            <p
              className="text-sm mb-4"
              style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontFamily: 'var(--font-nunito)' }}
            >
              Candidate for Ventura County Clerk-Recorder
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="badge badge-sage">{t(uiLabels.electionYear, lang)}</span>
              <span className="badge badge-neutral">{t(uiLabels.nonpartisanBadge, lang)}</span>
              <span className="badge badge-neutral">{t(uiLabels.venturaBadge, lang)}</span>
            </div>
          </div>

          {/* Column 2 — Ballot */}
          <div>
            <p
              className="text-xs font-bold uppercase mb-3"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.10em', fontFamily: 'var(--font-nunito)' }}
            >
              {t(uiLabels.ballotLabel, lang)}
            </p>
            <p
              className="text-sm font-semibold mb-1"
              style={{ color: 'var(--text-head)', fontFamily: 'var(--font-nunito)' }}
            >
              Computerized System Analyst
            </p>
            <p
              className="text-sm"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-nunito)' }}
            >
              Ventura County Clerk-Recorder
              <br />2026 Election
            </p>
          </div>

          {/* Column 3 — Contact + Theme */}
          <div className="flex flex-col gap-4">
            <div>
              <p
                className="text-xs font-bold uppercase mb-3"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.10em', fontFamily: 'var(--font-nunito)' }}
              >
                Contact
              </p>
              <button
                onClick={onContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm w-full justify-center"
                style={{
                  background: 'var(--sage)',
                  color: '#fff',
                  border: '2px solid var(--sage)',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 700,
                  transition: 'background 0.18s ease, transform 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--sage-dark)'
                  e.currentTarget.style.borderColor = 'var(--sage-dark)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--sage)'
                  e.currentTarget.style.borderColor = 'var(--sage)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
                aria-label="Open contact form"
              >
                ✉ {t(uiLabels.footerContact, lang)}
              </button>
            </div>

            {/* Theme toggle */}
            <div>
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm w-full"
                style={{
                  background: 'var(--bg-surface)',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-nunito)',
                  fontWeight: 600,
                  transition: 'background 0.18s ease, color 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--sage-pale)'
                  e.currentTarget.style.color = 'var(--sage-dark)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-surface)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }}
              >
                <span aria-hidden="true">{theme === 'light' ? '🌙' : '☀️'}</span>
                {theme === 'light' ? t(uiLabels.darkMode, lang) : t(uiLabels.lightMode, lang)}
              </button>
            </div>
          </div>

          {/* Column 4 — Language selector */}
          <div>
            <p
              className="text-xs font-bold uppercase mb-3"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.10em', fontFamily: 'var(--font-nunito)' }}
            >
              {t(uiLabels.footerLanguage, lang)}
            </p>
            <div
              className="flex flex-col gap-1.5"
              role="group"
              aria-label="Select language"
            >
              {LANGS.map((l) => {
                const isActive = lang === l
                return (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-pressed={isActive}
                    aria-label={`Switch to ${langLabels[l]}`}
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1"
                    style={{
                      background: isActive ? 'var(--sage-pale)' : 'transparent',
                      color: isActive ? 'var(--sage-dark)' : 'var(--text-muted)',
                      border: `1px solid ${isActive ? 'var(--sage-border)' : 'transparent'}`,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      fontFamily: 'var(--font-nunito)',
                      fontWeight: isActive ? 700 : 500,
                      outlineColor: 'var(--sage)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'var(--bg-surface)'
                        e.currentTarget.style.color = 'var(--text-body)'
                        e.currentTarget.style.borderColor = 'var(--border)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--text-muted)'
                        e.currentTarget.style.borderColor = 'transparent'
                      }
                    }}
                  >
                    {langLabels[l]}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div style={{ borderTop: '1px solid var(--border-light)', transition: 'border-color 0.25s ease' }}>
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs text-center sm:text-left"
            style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-nunito)' }}
          >
            {t(uiLabels.footerLegal, lang)}
          </p>
          <p
            className="text-xs text-center sm:text-right"
            style={{ color: 'var(--text-faint)', fontFamily: 'var(--font-nunito)', opacity: 0.7 }}
          >
            {t(uiLabels.footerCompliance, lang)}
          </p>
        </div>
      </div>
    </footer>
  )
}
