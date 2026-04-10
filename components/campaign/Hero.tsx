'use client'

import { heroContent, uiLabels, t } from '@/lib/content'
import { useLang } from '@/lib/LanguageContext'

interface HeroProps {
  onLearnMore: () => void
  onVolunteer: () => void
}

export default function Hero({ onLearnMore, onVolunteer }: HeroProps) {
  const { lang } = useLang()

  return (
    <section
      className="relative overflow-hidden hero-bg"
      aria-label="Campaign hero"
      style={{ borderBottom: '1px solid var(--border-light)' }}
    >
      {/* Sage green top accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, var(--sage-light) 0%, var(--sage) 45%, var(--navy) 100%)', opacity: 0.55 }}
      />

      <div className="relative max-w-site mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-20 sm:pb-18 lg:pt-24 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">

          {/* ── Candidate photo column ── */}
          <div className="flex-shrink-0 flex flex-col items-center fade-up">

            {/* Photo frame — warm portrait with sage accent border */}
            <div
              className="relative overflow-hidden"
              style={{
                width: 'clamp(200px, 28vw, 288px)',
                aspectRatio: '4/5',
                borderRadius: '22px',
                background: 'var(--sage-pale)',
                border: '2px solid var(--sage-border)',
                boxShadow:
                  '0 2px 8px rgba(30,50,84,0.06), 0 12px 40px rgba(30,50,84,0.09), 0 28px 56px rgba(30,50,84,0.05)',
              }}
            >
              {/* Paul.jpeg — swap for updated official photo as needed */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/paul.jpeg"
                alt="Paul Harold Johnson — Candidate for Ventura County Clerk-Recorder"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Subtle sage vignette at bottom */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 inset-x-0 h-1/4 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(30,50,84,0.12) 0%, transparent 100%)' }}
              />

              {/* Warm sage corner accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
                style={{
                  background: 'linear-gradient(225deg, var(--sage) 0%, transparent 65%)',
                  opacity: 0.25,
                  borderTopRightRadius: '22px',
                }}
              />
            </div>

            {/* Identity badges below photo */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <span className="badge badge-navy">{t(uiLabels.venturaBadge, lang)}</span>
              <span className="badge badge-neutral">2026</span>
              <span className="badge badge-sage">{t(uiLabels.nonpartisanBadge, lang)}</span>
            </div>
          </div>

          {/* ── Text column ── */}
          <div className="flex-1 min-w-0 text-center lg:text-left fade-up fade-up-delay-1">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span
                className="eyebrow"
                style={{
                  padding: '0.3rem 0.85rem',
                  background: 'var(--sage-pale)',
                  border: '1px solid var(--sage-border)',
                  borderRadius: '20px',
                  color: 'var(--sage-dark)',
                  fontSize: '0.68rem',
                }}
              >
                🗳 Candidate · Ventura County Clerk-Recorder
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="font-sans font-bold tracking-display leading-tight mb-4"
              style={{
                fontSize: 'clamp(1.85rem, 4.5vw, 3rem)',
                color: 'var(--text-head)',
              }}
            >
              {t(heroContent.title, lang)}
            </h1>

            {/* Sage rule below headline */}
            <div
              className="mb-5 mx-auto lg:mx-0"
              style={{
                width: '44px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--sage) 0%, var(--sage-light) 100%)',
                borderRadius: '2px',
              }}
              aria-hidden="true"
            />

            {/* Subtitle */}
            <p
              className="font-sans font-semibold mb-4"
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.12rem)',
                color: 'var(--sage-dark)',
                lineHeight: '1.5',
                fontFamily: 'var(--font-nunito)',
              }}
            >
              {t(heroContent.subtitle, lang)}
            </p>

            {/* Body */}
            <p
              className="mb-8 leading-body"
              style={{
                fontSize: 'clamp(0.93rem, 1.5vw, 1rem)',
                color: 'var(--text-body)',
                maxWidth: '60ch',
                fontFamily: 'var(--font-nunito)',
              }}
            >
              {t(heroContent.body, lang)}
            </p>

            {/* Credential chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {[
                { icon: '💻', text: t(uiLabels.chipAnalyst, lang) },
                { icon: '⚖️', text: t(uiLabels.chipRace, lang) },
                { icon: '🤝', text: t(uiLabels.chipCommunity, lang) },
              ].map((chip) => (
                <span
                  key={chip.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-body)',
                    boxShadow: '0 1px 3px rgba(30,50,84,0.06)',
                    fontFamily: 'var(--font-nunito)',
                    transition: 'background 0.25s ease, border-color 0.25s ease',
                  }}
                >
                  <span aria-hidden="true">{chip.icon}</span>
                  {chip.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button
                onClick={onLearnMore}
                className="btn-primary"
                style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', fontSize: '0.94rem' }}
              >
                {t(heroContent.learnMore, lang)}
              </button>
              <button
                onClick={onVolunteer}
                className="btn-ghost"
                style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', fontSize: '0.94rem' }}
              >
                {t(heroContent.volunteer, lang)}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'var(--border-light)' }}
      />
    </section>
  )
}
