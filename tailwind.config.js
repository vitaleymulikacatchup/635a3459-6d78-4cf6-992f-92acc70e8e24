/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'starbucks-green': '#00704A',
        'starbucks-light-green': '#1E3932',
        'starbucks-dark-green': '#0E382C',
        'starbucks-cream': '#F7F7F7',
        'starbucks-beige': '#F1F1F1'
      },
      fontFamily: {
        'sans': ['SoDo Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}