/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zarq: {
          DEFAULT: '#003E39', // Verde da marca
          dark: '#002522', // Verde mais escuro para contraste
        },
        gold: {
          500: '#CE8D4D', // Dourado/Cobre da marca
          600: '#B5773B', // Dourado/Cobre hover
        },
        zinc: {
          950: '#0A0A0A',
        }
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}