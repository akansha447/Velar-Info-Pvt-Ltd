/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './lib/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f8faf7',
        surface: 'rgba(255, 255, 255, 0.86)',
        surfaceStrong: 'rgba(15, 23, 42, 0.08)',
        primaryFrom: '#0f766e',
        primaryMid: '#f97316',
        primaryTo: '#f5f1ea',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(156, 130, 95, 0.14)',
        soft: '0 28px 80px rgba(15, 23, 42, 0.14)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 30px rgba(79, 70, 229, 0.18)' },
          '50%': { boxShadow: '0 0 40px rgba(79, 70, 229, 0.28)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        fadeUp: 'fadeUp 0.9s ease-out forwards',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        ticker: 'ticker 28s linear infinite',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
