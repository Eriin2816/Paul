'use client'

import {
  useEffect, useRef, useCallback, useState, ChangeEvent,
} from 'react'
import {
  sections, uiLabels, t, type Lang, type ContentBlock, type SectionData,
} from '@/lib/content'
import { useLang } from '@/lib/LanguageContext'

interface ContentPopupProps {
  sectionId: string | null
  onClose: () => void
}

// ── Content block renderer ────────────────────────────────────────────────────
function BlockRenderer({ blocks, lang }: { blocks: ContentBlock[]; lang: Lang }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2
                key={idx}
                className="font-sans font-bold leading-snug mt-2 tracking-headline"
                style={{ color: 'var(--navy-dark)', fontSize: 'clamp(1.3rem,2.5vw,1.7rem)' }}
              >
                {t(block.text, lang)}
              </h2>
            )
          case 'h3':
            return (
              <h3
                key={idx}
                className="font-sans font-semibold mt-5 mb-1 leading-snug"
                style={{ color: 'var(--navy)', fontSize: 'clamp(1.05rem,2vw,1.25rem)' }}
              >
                {t(block.text, lang)}
              </h3>
            )
          case 'p':
            return (
              <p
                key={idx}
                className="leading-body"
                style={{ color: 'var(--text-body)', fontSize: '0.97rem' }}
              >
                {t(block.text, lang)}
              </p>
            )
          case 'ul':
            return (
              <ul key={idx} className="space-y-2 pl-1">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: 'var(--sage)', color: '#fff' }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-sm leading-snug" style={{ color: 'var(--text-body)' }}>
                      {t(item, lang)}
                    </span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={idx} className="space-y-2 pl-1">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                      style={{ background: 'var(--navy)', color: '#fff' }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm leading-snug" style={{ color: 'var(--text-body)' }}>
                      {t(item, lang)}
                    </span>
                  </li>
                ))}
              </ol>
            )
          case 'highlight':
            return (
              <div
                key={idx}
                className="px-4 py-3 rounded-xl"
                style={{
                  background: 'var(--navy-faint)',
                  border: '1px solid rgba(28,49,96,0.15)',
                  color: 'var(--navy)',
                  fontWeight: 600,
                  fontSize: '0.93rem',
                }}
              >
                {t(block.text, lang)}
              </div>
            )
          case 'divider':
            return (
              <hr key={idx} style={{ border: 'none', borderTop: '1px solid var(--stone)', margin: '1rem 0' }} />
            )
          case 'cta-note':
            return (
              <div
                key={idx}
                className="px-4 py-3 rounded-xl text-sm italic"
                style={{
                  background: 'var(--gold-pale)',
                  border: '1px solid rgba(196,160,82,0.3)',
                  color: 'var(--text-body)',
                }}
              >
                {t(block.text, lang)}
              </div>
            )
          case 'badge-row':
            return (
              <div key={idx} className="flex flex-wrap gap-2 my-2">
                {block.badges.map((badge, i) => (
                  <span key={i} className="chip-sage">{t(badge, lang)}</span>
                ))}
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

// ── Events renderer ───────────────────────────────────────────────────────────
function EventsRenderer({ section, lang }: { section: SectionData; lang: Lang }) {
  const eventTypeColors: Record<string, string> = {
    townhall: 'var(--navy)',
    meeting: 'var(--sage-dark)',
    virtual: 'var(--terra)',
    community: '#5E7A4E',
  }
  return (
    <div className="space-y-4 mt-4">
      {section.events?.map((evt) => (
        <div
          key={evt.id}
          className="rounded-2xl overflow-hidden"
          style={{ border: '1.5px solid var(--stone)', background: 'white' }}
        >
          <div
            className="px-4 py-2 flex items-center justify-between"
            style={{ background: 'var(--sage-pale)', borderBottom: '1px solid var(--stone)' }}
          >
            <span
              className="text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full"
              style={{
                background: 'var(--bg-surface)',
                color: eventTypeColors[evt.eventType] ?? 'var(--navy)',
                border: `1.5px solid ${eventTypeColors[evt.eventType] ?? 'var(--navy)'}`,
              }}
            >
              {evt.eventType.toUpperCase()}
            </span>
            <span className="text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
              {evt.date}
            </span>
          </div>
          <div className="p-4">
            <h4
              className="font-serif font-bold mb-1 leading-snug"
              style={{ color: 'var(--navy-dark)', fontSize: '1rem' }}
            >
              {t(evt.title, lang)}
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-2">
              <span className="text-xs" style={{ color: 'var(--terra)' }}>
                🕐 {evt.time}
              </span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                📍 {t(evt.location, lang)}
              </span>
            </div>
            <p className="text-sm leading-body" style={{ color: 'var(--text-body)' }}>
              {t(evt.description, lang)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── News renderer with video upload ──────────────────────────────────────────
function NewsRenderer({ section, lang }: { section: SectionData; lang: Lang }) {
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState<string | null>(null)
  const [videoName, setVideoName] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setUploadedVideoUrl(url)
    setVideoName(file.name)
  }

  useEffect(() => {
    return () => {
      if (uploadedVideoUrl) URL.revokeObjectURL(uploadedVideoUrl)
    }
  }, [uploadedVideoUrl])

  return (
    <div className="space-y-5 mt-2">
      {/* Video upload area */}
      <div
        className="rounded-2xl p-5"
        style={{
          background: 'var(--navy-faint)',
          border: '1.5px dashed rgba(28,49,96,0.25)',
        }}
      >
        <p
          className="text-sm font-bold mb-1"
          style={{ color: 'var(--navy)' }}
        >
          📹 Campaign Video
        </p>
        <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
          Upload a campaign video from your computer to preview it here. (Local preview only — connect backend to publish.)
        </p>

        {uploadedVideoUrl ? (
          <div>
            <video
              src={uploadedVideoUrl}
              controls
              className="w-full rounded-xl mb-2"
              style={{ maxHeight: '260px', background: '#000' }}
              aria-label={`Uploaded video: ${videoName}`}
            />
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {videoName}
              </span>
              <button
                onClick={() => { setUploadedVideoUrl(null); setVideoName('') }}
                className="text-xs font-semibold px-3 py-1 rounded-lg"
                style={{ background: 'var(--terra-pale)', color: 'var(--terra)', border: '1px solid var(--terra-light)' }}
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
            style={{
              background: 'var(--navy)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--navy-mid)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--navy)' }}
          >
            <span aria-hidden="true">⬆</span> Upload Video from Computer
          </button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="sr-only"
          aria-label="Upload campaign video"
        />
      </div>

      {/* News items */}
      {section.news?.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl p-4"
          style={{
            background: 'var(--bg-surface)',
            border: '1.5px solid var(--stone)',
          }}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold"
              style={{ background: 'var(--terra-pale)', color: 'var(--terra)', border: '1px solid var(--terra-light)' }}
            >
              PLACEHOLDER
            </span>
            <span className="text-xs flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
              {item.source} · {item.date}
            </span>
          </div>
          <h4
            className="font-sans font-semibold leading-snug mb-2"
            style={{ color: 'var(--navy-dark)', fontSize: '0.97rem' }}
          >
            {t(item.headline, lang)}
          </h4>
          <p className="text-sm leading-body" style={{ color: 'var(--text-body)' }}>
            {t(item.summary, lang)}
          </p>
        </div>
      ))}
    </div>
  )
}

// ── Endorsements renderer ─────────────────────────────────────────────────────
function EndorsementsRenderer({ section, lang }: { section: SectionData; lang: Lang }) {
  return (
    <div className="space-y-4 mt-2">
      {section.endorsements?.map((end) => (
        <div
          key={end.id}
          className="rounded-2xl p-5"
          style={{ background: 'var(--sage-pale)', border: '1.5px solid var(--sage-light)' }}
        >
          <div className="flex items-start gap-3">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ background: 'var(--ivory)', border: '1.5px solid var(--sage-light)' }}
              aria-hidden="true"
            >
              👤
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: 'var(--navy-dark)' }}>{end.name}</p>
              <p className="text-xs" style={{ color: 'var(--sage-dark)' }}>{t(end.title, lang)}</p>
              {end.organization && (
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{end.organization}</p>
              )}
              {end.quote && (
                <p className="text-sm italic mt-2 leading-body" style={{ color: 'var(--text-body)' }}>
                  {t(end.quote, lang)}
                </p>
              )}
              <span
                className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                style={{ background: 'var(--terra-pale)', color: 'var(--terra)', border: '1px solid var(--terra-light)' }}
              >
                PLACEHOLDER
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── FAQs accordion renderer ───────────────────────────────────────────────────
function FaqsRenderer({ section, lang }: { section: SectionData; lang: Lang }) {
  const [openId, setOpenId] = useState<string | null>(null)
  return (
    <div className="space-y-2 mt-2">
      {section.faqs?.map((faq) => {
        const isOpen = openId === faq.id
        return (
          <div
            key={faq.id}
            className="rounded-xl overflow-hidden"
            style={{ border: '1.5px solid var(--stone)' }}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-start justify-between gap-3 p-4 text-left"
              style={{
                background: isOpen ? 'var(--navy-faint)' : 'white',
                cursor: 'pointer',
                transition: 'background 0.18s ease',
              }}
              aria-expanded={isOpen}
            >
              <span
                className="font-semibold text-sm leading-snug"
                style={{ color: 'var(--navy-dark)' }}
              >
                {t(faq.question, lang)}
              </span>
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: isOpen ? 'var(--navy)' : 'var(--stone)',
                  color: isOpen ? 'white' : 'var(--text-muted)',
                  transition: 'all 0.18s ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <div
                className="px-4 pb-4 pt-2 text-sm leading-body"
                style={{ color: 'var(--text-body)', background: 'var(--bg-surface)', borderTop: '1px solid var(--stone)' }}
              >
                {t(faq.answer, lang)}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ── Main popup ────────────────────────────────────────────────────────────────
export default function ContentPopup({ sectionId, onClose }: ContentPopupProps) {
  const { lang } = useLang()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const printZoneRef = useRef<HTMLDivElement>(null)

  const section = sectionId ? sections.find((s) => s.id === sectionId) : null

  // Focus trap + ESC close
  useEffect(() => {
    if (!section) return
    const prev = document.activeElement as HTMLElement
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return

      const dialog = dialogRef.current
      if (!dialog) return
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [section, onClose])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handlePdfExport = useCallback(() => {
    // Uses browser's native "Save as PDF" via print dialog
    window.print()
  }, [])

  if (!section) return null

  const title = t(section.label, lang)

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        style={{ background: 'rgba(15,30,61,0.65)', backdropFilter: 'blur(4px)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        ref={dialogRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
      >
        <div
          className="pointer-events-auto w-full animate-scale-in"
          style={{
            maxWidth: '800px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '18px',
            overflow: 'hidden',
            background: 'var(--bg-surface)',
            boxShadow: '0 4px 16px rgba(30,50,84,0.12), 0 16px 48px rgba(30,50,84,0.16), 0 40px 80px rgba(30,50,84,0.10)',
            border: '1px solid var(--border)',
            transition: 'background 0.25s ease',
          }}
        >
          {/* ── Sticky toolbar ── */}
          <div
            className="popup-toolbar flex-shrink-0 flex items-center justify-between gap-3 px-5 py-3"
            style={{
              background: 'var(--navy)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Title */}
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-lg leading-none" aria-hidden="true">{section.icon}</span>
              <h2
                id="popup-title"
                className="font-sans font-semibold text-white truncate"
                style={{ fontSize: 'clamp(0.92rem, 2vw, 1.08rem)', letterSpacing: '-0.01em' }}
              >
                {title}
              </h2>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Print */}
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.18)',
                  cursor: 'pointer',
                  transition: 'background 0.18s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                aria-label="Print this section"
                title="Print"
              >
                <span aria-hidden="true">🖨</span>
                <span className="hidden sm:inline">{t(uiLabels.print, lang)}</span>
              </button>

              {/* PDF */}
              <button
                onClick={handlePdfExport}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.18)',
                  cursor: 'pointer',
                  transition: 'background 0.18s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
                aria-label="Save as PDF"
                title="Save PDF"
              >
                <span aria-hidden="true">⬇</span>
                <span className="hidden sm:inline">{t(uiLabels.pdf, lang)}</span>
              </button>

              {/* Close */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-lg font-bold text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.15)',
                  cursor: 'pointer',
                  transition: 'background 0.18s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.10)' }}
                aria-label={t(uiLabels.close, lang)}
              >
                ✕
              </button>
            </div>
          </div>

          {/* ── Scrollable content body ── */}
          <div
            ref={printZoneRef}
            className="popup-print-zone flex-1 overflow-y-auto px-7 py-7"
            style={{ minHeight: 0, background: 'var(--bg-surface)', transition: 'background 0.25s ease' }}
          >
            {/* Blocks */}
            {section.blocks && section.blocks.length > 0 && (
              <BlockRenderer blocks={section.blocks} lang={lang} />
            )}

            {/* Special section renderers */}
            {section.id === 'events' && (
              <EventsRenderer section={section} lang={lang} />
            )}
            {section.id === 'news-media' && (
              <NewsRenderer section={section} lang={lang} />
            )}
            {section.id === 'endorsements' && (
              <EndorsementsRenderer section={section} lang={lang} />
            )}
            {section.id === 'faqs' && (
              <FaqsRenderer section={section} lang={lang} />
            )}

            {/* Footer line */}
            <div
              className="mt-10 pt-4 text-xs text-center"
              style={{ borderTop: '1px solid var(--border-light)', color: 'var(--text-faint)' }}
            >
              Paul Harold Johnson · Ventura County Clerk-Recorder · 2026 · Nonpartisan Campaign
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
