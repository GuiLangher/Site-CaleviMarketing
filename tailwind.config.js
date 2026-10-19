/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#100103',
          dark: '#160205',
          velvet: '#2A0408',
          wine: '#360203',
          crimson: '#6A0D14',
          ruby: '#6B0D14',
          gold: '#6D5800',
          'gold-rich': '#D4AF37',
          'gold-amber': '#B38E22',
          'gold-light': '#F5E6B3',
          'gold-muted': 'rgba(212, 175, 55, 0.25)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Raleway"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        quintic: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.5rem',
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s ease-in-out infinite alternate',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(0%)', opacity: '0.2' },
          '100%': { transform: 'translateY(100%)', opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

