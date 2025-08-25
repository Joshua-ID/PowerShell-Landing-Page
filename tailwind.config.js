/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22d3ee', // cyan-400-ish
          dark: '#0891b2',
          light: '#67e8f9'
        }
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(34,211,238,0.25)'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji']
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)'
      }
    },
  },
  plugins: [],
}
