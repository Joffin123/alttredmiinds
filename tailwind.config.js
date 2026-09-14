/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0c0c0b',
        panel: '#191917',
        line: '#363533',
        cream: '#f9f5ef',
        sand: '#e6e1d9',
        stone: '#dbd8d0',
        muted: '#959089',
        slate: '#8d959d',
        brand: '#35a231',
        'brand-hover': '#2e8f2a',
        lime: '#c9ff57',
        electric: '#3d6af7',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1296px',
      },
    },
  },
  plugins: [],
};
