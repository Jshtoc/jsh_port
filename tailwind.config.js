/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-dark': 'rgb(var(--color-secondary-dark) / <alpha-value>)',
        'surface-dark': 'rgb(var(--color-surface-dark) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
