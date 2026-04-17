/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#B85C28',
          dark: '#963F13',
          light: '#FFF0E6',
        },
        page: {
          bg: '#0A0A0A',
          surface: '#141414',
          elevated: '#1A1A1A',
          border: '#1F1F1F',
          borderStrong: '#333333',
          text: '#FFFFFF',
          textMuted: '#B0B0B0',
        },
      },
      boxShadow: {
        brand: '0 8px 24px rgba(184, 92, 40, 0.25)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 500ms ease-out both',
      },
    },
  },
  plugins: [],
}
