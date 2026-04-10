import type { Metadata } from 'next'
import { DM_Sans, Nunito } from 'next/font/google'
import './globals.css'

// DM Sans — clean, friendly, humanist sans-serif for headings
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// Nunito — warm, rounded sans-serif for body text
const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Paul Harold Johnson for Ventura County Clerk-Recorder 2026',
  description:
    'Paul Harold Johnson is running for Ventura County Clerk-Recorder in 2026 — committed to election integrity, accessible public services, transparency, and modernization for every resident.',
  metadataBase: new URL('https://pauljohnsonforventura.com'),
  openGraph: {
    title: 'Paul Harold Johnson for Ventura County Clerk-Recorder 2026',
    description:
      'Trusted leadership for Ventura County — integrity, accessibility, and modern service for every voter and every family.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Paul Harold Johnson for Ventura County Clerk-Recorder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paul Harold Johnson for Ventura County Clerk-Recorder 2026',
    description: 'Trusted leadership for Ventura County.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" className={`${dmSans.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased" style={{ background: 'var(--bg-base)', color: 'var(--text-body)' }}>
        {children}
      </body>
    </html>
  )
}
