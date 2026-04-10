/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm Brand Palette — from brand guidelines
        'bg-base':    'var(--bg-base)',
        'bg-surface': 'var(--bg-surface)',
        'bg-section': 'var(--bg-section)',
        sage: {
          DEFAULT: '#7B9B7E',
          dark:    '#5A7D5D',
          mid:     '#9DB59F',
          light:   '#C4D5C5',
          pale:    '#EBF2EC',
          border:  '#B8CEB9',
        },
        navy: {
          DEFAULT: '#1E3254',
          dark:    '#131E38',
          mid:     '#2C4575',
          light:   '#4A6FA0',
          tint:    '#EBF0F8',
          faint:   '#F0F4FC',
        },
        clay: {
          DEFAULT: '#C28060',
          dark:    '#9E6044',
          light:   '#DDA880',
          pale:    '#F5E8DC',
          border:  '#D4A88A',
        },
        stone: {
          DEFAULT: '#9A9490',
          light:   '#C8C3BB',
          pale:    '#F0EDE8',
        },
        // Legacy kept for content layer
        'warm-white': '#FAF8F3',
        'off-white':  '#F4EFE6',
        ivory:        '#FAF8F3',
        cream:        '#F4EFE6',
        sand: {
          DEFAULT: '#F4EFE6',
          deep:    '#E0D5C5',
        },
        champ: {
          DEFAULT: '#C28060',
          light:   '#DDA880',
          pale:    '#F5E8DC',
          border:  '#D4A88A',
        },
        terra: {
          DEFAULT: '#C28060',
          light:   '#DDA880',
          pale:    '#F5E8DC',
        },
        gold: {
          DEFAULT: '#C28060',
          pale:    '#F5E8DC',
        },
        border: {
          DEFAULT: '#D8D2C8',
          light:   '#E8E3DB',
          mid:     '#C0BAB0',
        },
      },
      fontFamily: {
        // DM Sans — clean, friendly, humanist sans for headings
        sans:  ['var(--font-dm)', 'DM Sans', 'system-ui', 'sans-serif'],
        // Nunito — warm, rounded sans for body
        nunito: ['var(--font-nunito)', 'Nunito', 'system-ui', 'sans-serif'],
        // Legacy serif alias (mapped to DM Sans now)
        serif: ['var(--font-dm)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display:  '-0.025em',
        headline: '-0.015em',
        snug:     '-0.01em',
        wide:     '0.05em',
        widest:   '0.11em',
      },
      lineHeight: {
        body:    '1.72',
        relaxed: '1.80',
        snug:    '1.30',
        tight:   '1.18',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        warm:     '0 1px 3px rgba(30,50,84,0.04), 0 4px 14px rgba(30,50,84,0.06), 0 14px 36px rgba(30,50,84,0.04)',
        'warm-lg':'0 2px 6px rgba(30,50,84,0.05), 0 8px 24px rgba(30,50,84,0.08), 0 24px 56px rgba(30,50,84,0.05)',
        sage:     '0 1px 3px rgba(123,155,126,0.08), 0 4px 16px rgba(123,155,126,0.16)',
        navy:     '0 2px 8px rgba(30,50,84,0.12), 0 8px 28px rgba(30,50,84,0.16)',
        popup:    '0 4px 16px rgba(30,50,84,0.12), 0 16px 48px rgba(30,50,84,0.16), 0 40px 80px rgba(30,50,84,0.10)',
      },
      animation: {
        'fade-up':  'fadeUp 0.65s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in':  'fadeIn 0.4s ease both',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.34, 1.4, 0.64, 1) both',
      },
      keyframes: {
        fadeUp:  { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        scaleIn: { from: { opacity: '0', transform: 'scale(0.95)' }, to: { opacity: '1', transform: 'scale(1)' } },
      },
      maxWidth: {
        site:      '1280px',
        'prose-lg':'72ch',
      },
    },
  },
  plugins: [],
}
