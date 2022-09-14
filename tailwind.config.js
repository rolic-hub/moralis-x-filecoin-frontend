/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'Text-green': '#12ECA0'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
