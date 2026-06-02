/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#e8e8ed',
          100: '#c2c2ce',
          200: '#9a9aac',
          300: '#727288',
          400: '#54546a',
          500: '#36364d',
          600: '#2a2a3d',
          700: '#1e1e2d',
          800: '#12121c',
          900: '#07070a',
        },
        ember: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        dust: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 20px rgba(249, 115, 22, 0.15), 0 0 40px rgba(249, 115, 22, 0.05)',
        'glow-amber-lg': '0 0 30px rgba(249, 115, 22, 0.2), 0 0 60px rgba(249, 115, 22, 0.08)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
