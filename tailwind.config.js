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
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#38aaf6',
          500: '#0e8ee9',
          600: '#0270c7',
          700: '#0359a1',
          800: '#074c84',
          900: '#0c3f6e',
          950: '#082849',
        },
        navy: {
          800: '#0f172a',
          900: '#090d16',
          950: '#05080e',
        },
        accent: {
          gold: '#f59e0b',
          amber: '#d97706',
          emergency: '#dc2626',
          success: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -10px rgba(12, 63, 110, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'lifted': '0 20px 40px -15px rgba(12, 63, 110, 0.15)',
        'emergency': '0 4px 20px rgba(220, 38, 38, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
