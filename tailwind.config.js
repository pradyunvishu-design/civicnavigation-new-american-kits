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
          50: '#f0f7f4',
          100: '#d9ede2',
          200: '#b5dcc7',
          300: '#84c4a5',
          400: '#56a880',
          500: '#358c64',
          600: '#267150',
          700: '#1f5a41',
          800: '#1b4835',
          900: '#173b2d',
        },
        navy: {
          50: '#f4f6fb',
          100: '#e8ecf6',
          200: '#ccd5eb',
          300: '#a0b2d8',
          400: '#6d89c0',
          500: '#4a6aa8',
          600: '#38528d',
          700: '#2e4372',
          800: '#293a5f',
          900: '#1a2540',
          950: '#111828',
        },
        warm: {
          50: '#fefdfb',
          100: '#fdf9f1',
          200: '#faf2e3',
          300: '#f5e6cc',
        },
        coral: {
          400: '#f08c6a',
          500: '#e86f4c',
          600: '#d45737',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        'display': '-0.025em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
