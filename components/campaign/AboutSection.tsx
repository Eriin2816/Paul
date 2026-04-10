'use client'

import { aboutSection, uiLabels, t } from '@/lib/content'
import { useLang } from '@/lib/LanguageContext'

interface AboutSectionProps {
  onReadBio: () => void
  onVolunteer: () => void
}

export default function AboutSection({ onReadBio, onVolunteer }: AboutSectionProps) {
  const { lang } = useLang()

  return (
    <section
      id="about"
      className="relative section-alt"
      aria-labelledby="about-heading"
      style={{ borderBottom: '1px solid var(--border-light)' }}
    >
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

        {/* Section label + heading */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">{t(uiLabels.meetCandidate, lang)}</p>
          <h2
            id="about-heading"
            className="font-sans font-bold tracking-headline leading-tight"
            style={{
              color: 'var(--text-head)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
            }}
          >
            {t(aboutSection.heading, lang)}
          </h2>
          {/* Sage underline */}
          <div
            className="mx-auto mt-4"
            style={{
              width: '40px',
              height: '3px',
              background: 'linear-gradient(90deg, var(--sage) 0%, var(--sage-light) 100%)',
              borderRadius: '2px',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Main card */}
        <div className="card-elevated overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* Left — portrait panel — deep navy authority */}
            <div
              className="lg:w-60 xl:w-68 flex-shrink-0 flex flex-col items-center justify-start gap-5 p-8 lg:p-10"
              style={{
                background: 'linear-gradient(165deg, #1B2D52 0%, #253F6E 100%)',
                borderRight: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              {/* Circular portrait — Paul.jpeg */}
              <div
                className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0"
                style={{
                  border: '3px solid rgba(255,255,255,0.22)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.30)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/paul.jpeg"
                  alt="Paul Harold Johnson"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <div className="text-center">
                <p className="font-sans font-bold text-white leading-snug" style={{ fontSize: '1.05rem' }}>
                  Paul Harold Johnson
                </p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.60)', fontFamily: 'var(--font-nunito)' }}>
                  Ventura County
                  <br />Clerk-Recorder Candidate
                </p>
              </div>

              {/* Ballot designation */}
              <div
                className="w-full text-center px-4 py-3 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <p
                  className="text-xs font-bold uppercase mb-1"
                  style={{ color: 'var(--sage-light)', letterSpacing: '0.08em', fontFamily: 'var(--font-nunito)' }}
                >
                  {t(uiLabels.ballotLabel, lang)}
                </p>
                <p className="text-sm font-semibold text-white leading-snug" style={{ fontFamily: 'var(--font-nunito)' }}>
                  Computerized System Analyst
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2">
                <span
                  className="text-xs px-2.5 py-1 rounded font-bold uppercase"
                  style={{
                    background: 'rgba(255,255,255,0.10)',
                    color: 'rgba(255,255,255,0.70)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    letterSpacing: '0.06em',
                    fontFamily: 'var(--font-nunito)',
                  }}
                >
                  {t(uiLabels.electionYear, lang)}
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded font-bold uppercase"
                  style={{
                    background: 'rgba(123,155,126,0.20)',
                    color: 'var(--sage-light)',
                    border: '1px solid rgba(123,155,126,0.35)',
                    letterSpacing: '0.06em',
                    fontFamily: 'var(--font-nunito)',
                  }}
                >
                  {t(uiLabels.nonpartisanBadge, lang)}
                </span>
              </div>
            </div>

            {/* Right — content panel */}
            <div
              className="flex-1 p-8 lg:p-10 xl:p-12 flex flex-col justify-between gap-8"
              style={{ background: 'var(--bg-surface)', transition: 'background 0.25s ease' }}
            >
              <div>
                {/* Intro paragraph */}
                <p
                  className="leading-body mb-7"
                  style={{
                    fontSize: 'clamp(0.96rem, 1.5vw, 1.03rem)',
                    color: 'var(--text-body)',
                    fontFamily: 'var(--font-nunito)',
                  }}
                >
                  {t(aboutSection.intro, lang)}
                </p>

                {/* Highlight points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                  {aboutSection.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 px-4 py-3 rounded-xl"
                      style={{
                        background: 'var(--bg-section)',
                        border: '1px solid var(--border-light)',
                        transition: 'background 0.25s ease',
                      }}
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{ background: 'var(--sage)', color: '#fff' }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span
                        className="text-sm font-medium leading-snug"
                        style={{ color: 'var(--text-body)', fontFamily: 'var(--font-nunito)' }}
                      >
                        {t(item, lang)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Why this race matters */}
                <div
                  className="px-5 py-4 rounded-xl"
                  style={{
                    background: 'var(--sage-pale)',
                    border: '1px solid var(--sage-border)',
                    borderLeft: '4px solid var(--sage)',
                    transition: 'background 0.25s ease',
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase mb-2"
                    style={{ color: 'var(--sage-dark)', letterSpacing: '0.08em', fontFamily: 'var(--font-nunito)' }}
                  >
                    {t(uiLabels.whyRaceMatters, lang)}
                  </p>
                  <p
                    className="text-sm leading-body"
                    style={{ color: 'var(--text-body)', fontFamily: 'var(--font-nunito)' }}
                  >
                    {t(aboutSection.whyMatters, lang)}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={onReadBio}
                  className="btn-primary"
                  style={{ fontSize: '0.88rem', paddingTop: '0.6rem', paddingBottom: '0.6rem' }}
                >
                  {t(aboutSection.readBio, lang)}
                </button>
                <button
                  onClick={onVolunteer}
                  className="btn-ghost"
                  style={{ fontSize: '0.88rem', paddingTop: '0.6rem', paddingBottom: '0.6rem' }}
                >
                  {t(aboutSection.volunteerCta, lang)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
