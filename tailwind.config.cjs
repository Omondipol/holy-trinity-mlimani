/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        choir: {
          dark: '#081120',
          navy: '#10213b',
          gold: '#d9b75d',
          cream: '#f9f5ef',
          auburn: '#a65d4b',
          moss: '#6a7d59',
          warm: '#c79d6b'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(8, 17, 32, 0.16)',
        glow: '0 12px 40px rgba(217, 183, 93, 0.2)'
      }
    }
  },
  plugins: []
}