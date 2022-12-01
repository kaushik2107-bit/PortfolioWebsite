/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'namelogo': "url('/assets/name-logo.svg')"
      }
    },
  },
  plugins: [],
}
