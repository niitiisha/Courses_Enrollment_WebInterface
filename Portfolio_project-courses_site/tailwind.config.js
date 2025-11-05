/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        primary: '#FF6B4A',
        background: '#2B2B2B',
      },
    },
  },
  plugins: [],
};