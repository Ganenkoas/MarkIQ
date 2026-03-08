/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f8fafc', // slate-50
        foreground: '#0f172a', // slate-900
        primary: {
          DEFAULT: '#06b6d4', // cyan-500
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#8b5cf6', // violet-500
          foreground: '#ffffff',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.85)',
          foreground: '#0f172a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(to right bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'neon': '0 0 20px rgba(6, 182, 212, 0.3)',
      }
    },
  },
  plugins: [],
}
