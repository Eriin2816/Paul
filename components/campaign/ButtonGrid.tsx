'use client'

import { sections, uiLabels, t } from '@/lib/content'
import { useLang } from '@/lib/LanguageContext'

interface ButtonGridProps {
  onSectionOpen: (sectionId: string) => void
}

const SECTION_ICONS: Record<string, string> = {
  'about':              '👤',
  'why-running':        '🎯',
  'election-integrity': '🗳️',
  'voter-access':       '✅',
  'modernization':      '💻',
  'public-records':     '📁',
  'customer-service':   '🤝',
  'transparency':       '🔍',
  'community-outreach': '🌎',
  'events':             '📅',
  'news-media':         '📰',
  'endorsements':       '⭐',
  'volunteer':          '🙋',
  'faqs':               '❓',
  'get-involved':       '🌟',
}

export default function ButtonGrid({ onSectionOpen }: ButtonGridProps) {
  const { lang } = useLang()

  return (
    <section
      className="relative py-16 sm:py-20"
      style={{
        background: 'var(--bg-base)',
        borderBottom: '1px solid var(--border-light)',
        transition: 'background 0.25s ease',
      }}
      aria-label="Campaign topics"
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — fully translated */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">{t(uiLabels.exploreLabel, lang)}</p>
          <h2
            className="font-sans font-bold tracking-headline"
            style={{
              color: 'var(--text-head)',
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
            }}
          >
            {t(uiLabels.exploreHeading, lang)}
          </h2>
          <p
            className="mt-3 mx-auto"
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.93rem',
              maxWidth: '56ch',
              lineHeight: '1.65',
              fontFamily: 'var(--font-nunito)',
            }}
          >
            {t(uiLabels.exploreSubtitle, lang)}
          </p>
        </div>

        {/* Grid — warm action cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionOpen(section.id)}
              className="group relative flex flex-col items-center justify-center gap-2.5 p-4 text-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97]"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-light)',
                borderRadius: '16px',
                minHeight: '100px',
                boxShadow: '0 1px 3px rgba(30,50,84,0.04), 0 2px 8px rgba(30,50,84,0.04)',
                transition:
                  'transform 0.18s cubic-bezier(0.16,1,0.3,1), box-shadow 0.18s ease, border-color 0.18s ease, background 0.25s ease',
                outlineColor: 'var(--sage)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(30,50,84,0.09), 0 12px 28px rgba(30,50,84,0.06)'
                e.currentTarget.style.borderColor = 'var(--sage-border)'
                e.currentTarget.style.background = 'var(--bg-surface)'
                const icon = e.currentTarget.querySelector('span') as HTMLElement
                if (icon) { icon.style.background = 'var(--sage-pale)'; icon.style.borderColor = 'var(--sage-border)' }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(30,50,84,0.04), 0 2px 8px rgba(30,50,84,0.04)'
                e.currentTarget.style.borderColor = 'var(--border-light)'
                e.currentTarget.style.background = 'var(--bg-surface)'
                const icon = e.currentTarget.querySelector('span') as HTMLElement
                if (icon) { icon.style.background = 'var(--bg-section)'; icon.style.borderColor = 'var(--border-light)' }
              }}
              aria-label={`Open ${t(section.label, lang)}`}
            >
              {/* Icon circle */}
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg leading-none flex-shrink-0"
                style={{
                  background: 'var(--bg-section)',
                  border: '1px solid var(--border-light)',
                  transition: 'background 0.18s ease, border-color 0.18s ease',
                }}
                role="img"
                aria-hidden="true"
              >
                {SECTION_ICONS[section.id] ?? '📌'}
              </span>

              {/* Label */}
              <span
                className="font-semibold leading-tight"
                style={{
                  fontSize: 'clamp(0.68rem, 1.1vw, 0.78rem)',
                  color: 'var(--text-body)',
                  letterSpacing: '0.005em',
                  fontFamily: 'var(--font-nunito)',
                  transition: 'color 0.18s ease',
                }}
              >
                {t(section.label, lang)}
              </span>

              {/* Sage bottom accent on hover */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 inset-x-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(90deg, var(--sage) 0%, var(--sage-light) 100%)',
                  transition: 'opacity 0.18s ease',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
