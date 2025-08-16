/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a9eff',
        secondary: '#00d4ff',
        dark: '#0a0a0a',
        'dark-light': '#1a1a1a',
        'dark-lighter': '#2a2a2a',
        'text-light': '#ccc',
        'text-lighter': '#888',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

