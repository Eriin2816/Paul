'use client'

import { useState, useCallback } from 'react'
import { LanguageProvider } from '@/lib/LanguageContext'
import Header from '@/components/campaign/Header'
import Hero from '@/components/campaign/Hero'
import AboutSection from '@/components/campaign/AboutSection'
import ButtonGrid from '@/components/campaign/ButtonGrid'
import ContentPopup from '@/components/campaign/ContentPopup'
import ContributeDialog from '@/components/campaign/ContributeDialog'
import ContactDialog from '@/components/campaign/ContactDialog'
import Footer from '@/components/campaign/Footer'

type ActiveDialog = null | 'contribute' | 'contact' | { type: 'section'; id: string }

export default function CampaignPage() {
  const [activeDialog, setActiveDialog] = useState<ActiveDialog>(null)

  const openContribute = useCallback(() => setActiveDialog('contribute'), [])
  const openContact = useCallback(() => setActiveDialog('contact'), [])
  const openSection = useCallback((id: string) => setActiveDialog({ type: 'section', id }), [])
  const closeAll = useCallback(() => setActiveDialog(null), [])

  const activeSectionId =
    activeDialog !== null && typeof activeDialog === 'object' && activeDialog.type === 'section'
      ? activeDialog.id
      : null

  return (
    <LanguageProvider>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm"
        style={{ background: 'var(--sage)', color: 'white' }}
      >
        Skip to main content
      </a>

      {/* 1 ── Header */}
      <Header onContribute={openContribute} />

      {/* 2–4 ── Main content */}
      <main id="main-content">

        {/* 2 ── Hero */}
        <Hero
          onLearnMore={() => openSection('about')}
          onVolunteer={() => openSection('volunteer')}
        />

        {/* 3 ── About */}
        <AboutSection
          onReadBio={() => openSection('about')}
          onVolunteer={() => openSection('volunteer')}
        />

        {/* 4 ── Buttons */}
        <ButtonGrid onSectionOpen={openSection} />

      </main>

      {/* 5 ── Footer */}
      <Footer onContact={openContact} />

      {/* ── Overlays / Dialogs ── */}
      {activeSectionId && (
        <ContentPopup sectionId={activeSectionId} onClose={closeAll} />
      )}
      {activeDialog === 'contribute' && (
        <ContributeDialog onClose={closeAll} />
      )}
      {activeDialog === 'contact' && (
        <ContactDialog onClose={closeAll} />
      )}
    </LanguageProvider>
  )
}
