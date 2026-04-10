'use client'

import { useEffect, useRef } from 'react'
import { contactLabels, uiLabels, t } from '@/lib/content'
import { useLang } from '@/lib/LanguageContext'

interface ContactDialogProps {
  onClose: () => void
}

export default function ContactDialog({ onClose }: ContactDialogProps) {
  const { lang } = useLang()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Focus trap + ESC
  useEffect(() => {
    const prev = document.activeElement as HTMLElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      const el = dialogRef.current
      if (!el) return
      const focusable = el.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      const first = focusable[0]; const last = focusable[focusable.length - 1]
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus() } }
      else { if (document.activeElement === last) { e.preventDefault(); first.focus() } }
    }
    document.addEventListener('keydown', handler)
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
      prev?.focus()
    }
  }, [onClose])

  // Inject GHL form embed script for auto-resize
  useEffect(() => {
    const existing = document.getElementById('ghl-form-embed-script')
    if (existing) return
    const script = document.createElement('script')
    script.id = 'ghl-form-embed-script'
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      const s = document.getElementById('ghl-form-embed-script')
      if (s) document.body.removeChild(s)
    }
  }, [])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50"
        style={{ background: 'rgba(20,32,60,0.65)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog scroll container — allows dialog to scroll on small screens */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        ref={dialogRef}
        className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 sm:p-6 pointer-events-none overflow-y-auto"
      >
        <div
          className="pointer-events-auto w-full animate-scale-in flex flex-col my-4 sm:my-0"
          style={{
            maxWidth: '520px',
            borderRadius: '18px',
            overflow: 'hidden',
            background: 'var(--bg-surface)',
            boxShadow: '0 4px 16px rgba(30,50,84,0.12), 0 16px 48px rgba(30,50,84,0.16), 0 40px 80px rgba(30,50,84,0.10)',
            border: '1px solid var(--border)',
            transition: 'background 0.25s ease',
          }}
        >
          {/* Header */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-6 py-4"
            style={{
              background: 'var(--navy)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <h2
              id="contact-title"
              className="font-sans font-semibold text-white"
              style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}
            >
              ✉ {t(contactLabels.title, lang)}
            </h2>
            <button
              ref={closeRef}
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white font-bold"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.18)',
                cursor: 'pointer',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.24)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)' }}
              aria-label={t(uiLabels.close, lang)}
            >
              ✕
            </button>
          </div>

          {/* Body — no scroll, expands to full form height */}
          <div
            className="px-6 pt-5 pb-6"
            style={{ background: 'var(--bg-surface)', transition: 'background 0.25s ease' }}
          >
            {/* Description */}
            <p className="text-sm mb-4 leading-body" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-nunito)' }}>
              {t(contactLabels.subtitle, lang)}
            </p>

            {/* GHL Form iframe — auto-resizes via form_embed.js */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/8WgrO6RPc4LLq51L73hF"
              style={{
                width: '100%',
                height: '600px',
                border: 'none',
                display: 'block',
              }}
              id="inline-8WgrO6RPc4LLq51L73hF"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-activation-type="alwaysActivated"
              data-deactivation-type="neverDeactivate"
              data-form-name="Contact Form"
              data-height="600"
              data-layout-iframe-id="inline-8WgrO6RPc4LLq51L73hF"
              data-form-id="8WgrO6RPc4LLq51L73hF"
              title="Contact Form"
            />
          </div>
        </div>
      </div>
    </>
  )
}
