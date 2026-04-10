'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'
import { contributeLabels, uiLabels, t } from '@/lib/content'
import { useLang } from '@/lib/LanguageContext'

interface ContributeDialogProps {
  onClose: () => void
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

const DONATION_AMOUNTS = [25, 50, 100, 250, 500]

interface FormData {
  fullName: string
  email: string
  address: string
  city: string
  state: string
  zip: string
  occupation: string
  employer: string
  amount: number | ''
  customAmount: string
  message: string
}

const INITIAL: FormData = {
  fullName: '', email: '', address: '', city: '', state: 'CA', zip: '',
  occupation: '', employer: '', amount: '', customAmount: '', message: '',
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null
  return <p className="mt-1 text-xs font-semibold" style={{ color: '#C0392B' }}>{msg}</p>
}

export default function ContributeDialog({ onClose }: ContributeDialogProps) {
  const { lang } = useLang()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [formState, setFormState] = useState<FormState>('idle')

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
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
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

  const isRetired = form.occupation.toLowerCase().trim() === 'retired'
  const finalAmount = form.amount !== '' ? form.amount : (form.customAmount ? parseFloat(form.customAmount) : 0)

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required.'
    if (!form.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (!form.address.trim()) e.address = 'Address is required.'
    if (!form.city.trim()) e.city = 'City is required.'
    if (!form.zip.trim()) e.zip = 'ZIP code is required.'
    if (!form.occupation.trim()) e.occupation = 'Occupation is required.'
    if (!isRetired && !form.employer.trim()) e.employer = 'Employer is required (or enter Retired as occupation).'
    if (!finalAmount || finalAmount <= 0) e.amount = 'Please select or enter a donation amount.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          address: form.address,
          city: form.city,
          state: form.state,
          zip: form.zip,
          occupation: form.occupation,
          employer: form.employer,
          amount: finalAmount,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) throw new Error(data.error ?? 'Checkout failed')
      window.location.href = data.url
    } catch {
      setFormState('error')
    }
  }

  const set = (field: keyof FormData, value: string | number) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50"
        style={{ background: 'rgba(15,30,61,0.65)', backdropFilter: 'blur(4px)' }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contribute-title"
        ref={dialogRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none"
      >
        <div
          className="pointer-events-auto w-full animate-scale-in flex flex-col"
          style={{
            maxWidth: '580px',
            maxHeight: '92vh',
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
            <div>
              <h2 id="contribute-title" className="font-sans font-semibold text-white" style={{ fontSize: '1.05rem', letterSpacing: '-0.01em' }}>
                ♥ {t(contributeLabels.title, lang)}
              </h2>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white font-bold"
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.18)',
                cursor: 'pointer',
              }}
              aria-label={t(uiLabels.close, lang)}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div
            className="flex-1 overflow-y-auto px-6 py-5"
            style={{ background: 'var(--bg-surface)', transition: 'background 0.25s ease' }}
          >
            {formState === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{ background: 'var(--sage-pale)', border: '2px solid var(--sage-light)' }}
                >
                  ✅
                </div>
                <h3 className="font-sans font-bold text-xl" style={{ color: 'var(--text-head)' }}>
                  {t(uiLabels.successTitle, lang)}
                </h3>
                <p className="text-sm leading-body" style={{ color: 'var(--text-body)', maxWidth: '36ch' }}>
                  {t(uiLabels.donateSuccess, lang)}{' '}
                  <em style={{ color: 'var(--text-muted)' }}>(Connect real payment processing before launch.)</em>
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary px-6 py-2.5 text-sm mt-2"
                >
                  {t(uiLabels.close, lang)}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p className="text-sm mb-5 leading-body" style={{ color: 'var(--text-muted)' }}>
                  {t(contributeLabels.subtitle, lang)}
                </p>

                {/* Donation amount */}
                <fieldset className="mb-5">
                  <legend className="field-label mb-2">Donation Amount *</legend>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {DONATION_AMOUNTS.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => { set('amount', amt); set('customAmount', '') }}
                        className="px-4 py-2 rounded-xl text-sm font-bold"
                        style={{
                          background: form.amount === amt ? 'var(--sage)' : 'var(--bg-section)',
                          color: form.amount === amt ? 'white' : 'var(--text-body)',
                          border: '2px solid',
                          borderColor: form.amount === amt ? 'var(--sage)' : 'var(--border)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        ${amt}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => { set('amount', ''); }}
                      className="px-4 py-2 rounded-xl text-sm font-bold"
                      style={{
                        background: form.amount === '' && form.customAmount ? 'var(--navy)' : 'var(--stone)',
                        color: form.amount === '' && form.customAmount ? 'white' : 'var(--text-head)',
                        border: `2px solid ${form.amount === '' && form.customAmount ? 'var(--navy)' : 'var(--stone-mid)'}`,
                        cursor: 'pointer',
                      }}
                    >
                      Other
                    </button>
                  </div>
                  {form.amount === '' && (
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter amount ($)"
                      className={`input-field ${errors.amount ? 'error' : ''}`}
                      value={form.customAmount}
                      onChange={(e) => set('customAmount', e.target.value)}
                      aria-label="Custom donation amount"
                    />
                  )}
                  <FieldError msg={errors.amount} />
                </fieldset>

                {/* Name */}
                <div className="mb-4">
                  <label className="field-label" htmlFor="c-name">Full Name *</label>
                  <input
                    id="c-name" type="text" className={`input-field ${errors.fullName ? 'error' : ''}`}
                    value={form.fullName} onChange={(e) => set('fullName', e.target.value)}
                    placeholder="Your full legal name" autoComplete="name"
                  />
                  <FieldError msg={errors.fullName} />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className="field-label" htmlFor="c-email">Email Address *</label>
                  <input
                    id="c-email" type="email" className={`input-field ${errors.email ? 'error' : ''}`}
                    value={form.email} onChange={(e) => set('email', e.target.value)}
                    placeholder="you@example.com" autoComplete="email"
                  />
                  <FieldError msg={errors.email} />
                </div>

                {/* Address */}
                <div className="mb-4">
                  <label className="field-label" htmlFor="c-address">Residential Street Address *</label>
                  <input
                    id="c-address" type="text" className={`input-field ${errors.address ? 'error' : ''}`}
                    value={form.address} onChange={(e) => set('address', e.target.value)}
                    placeholder="123 Main St" autoComplete="street-address"
                  />
                  <FieldError msg={errors.address} />
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="col-span-2">
                    <label className="field-label" htmlFor="c-city">City *</label>
                    <input
                      id="c-city" type="text" className={`input-field ${errors.city ? 'error' : ''}`}
                      value={form.city} onChange={(e) => set('city', e.target.value)}
                      placeholder="Ventura" autoComplete="address-level2"
                    />
                    <FieldError msg={errors.city} />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="c-zip">ZIP *</label>
                    <input
                      id="c-zip" type="text" className={`input-field ${errors.zip ? 'error' : ''}`}
                      value={form.zip} onChange={(e) => set('zip', e.target.value)}
                      placeholder="93001" maxLength={10} autoComplete="postal-code"
                    />
                    <FieldError msg={errors.zip} />
                  </div>
                </div>

                {/* Occupation */}
                <div className="mb-4">
                  <label className="field-label" htmlFor="c-occ">Occupation *</label>
                  <input
                    id="c-occ" type="text" className={`input-field ${errors.occupation ? 'error' : ''}`}
                    value={form.occupation} onChange={(e) => set('occupation', e.target.value)}
                    placeholder="Occupation (type 'Retired' if retired)" autoComplete="organization-title"
                  />
                  <FieldError msg={errors.occupation} />
                </div>

                {/* Employer — hidden if retired */}
                <div className="mb-4">
                  <label className="field-label" htmlFor="c-emp">
                    Employer {isRetired ? '(Optional — Retired)' : '*'}
                  </label>
                  <input
                    id="c-emp" type="text"
                    className={`input-field ${errors.employer && !isRetired ? 'error' : ''}`}
                    value={form.employer} onChange={(e) => set('employer', e.target.value)}
                    placeholder={isRetired ? 'N/A (Retired)' : 'Employer name'}
                    disabled={isRetired}
                    style={isRetired ? { background: 'var(--stone)', opacity: 0.6 } : {}}
                    autoComplete="organization"
                  />
                  {!isRetired && <FieldError msg={errors.employer} />}
                </div>

                {/* Message */}
                <div className="mb-5">
                  <label className="field-label" htmlFor="c-msg">Message (Optional)</label>
                  <textarea
                    id="c-msg" rows={3} className="input-field resize-none"
                    value={form.message} onChange={(e) => set('message', e.target.value)}
                    placeholder="Optional note or comment..."
                  />
                </div>

                {/* Compliance */}
                <div
                  className="mb-5 p-3.5 rounded-xl text-xs leading-body"
                  style={{ background: 'var(--gold-pale)', border: '1px solid rgba(196,160,82,0.3)', color: 'var(--text-body)' }}
                >
                  {t(contributeLabels.complianceNote, lang)}
                </div>

                {formState === 'error' && (
                  <div className="mb-4 p-3 rounded-xl text-sm" style={{ background: '#FEECEC', border: '1px solid #E5B8B8', color: '#C0392B' }}>
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full btn-primary py-3 text-sm"
                  style={{ opacity: formState === 'submitting' ? 0.65 : 1, borderRadius: '10px' }}
                >
                  {formState === 'submitting' ? 'Processing…' : `Contribute ${finalAmount ? `$${finalAmount}` : ''}`}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
