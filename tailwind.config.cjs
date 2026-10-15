module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}', './pages/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        choir: {
          dark: '#081120',
          navy: '#10213b',
          gold: '#d9b75d',
          cream: '#f9f5ef'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
