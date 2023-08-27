/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      animation: {
        'spin-slow': 'spin 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
