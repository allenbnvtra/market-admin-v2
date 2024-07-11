import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    screens: {
      xs: '500px',
      sm: '600px',
      md: '960px',
      lg: '1180px',
      xl: '1280px'
    },
    extend: {}
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
