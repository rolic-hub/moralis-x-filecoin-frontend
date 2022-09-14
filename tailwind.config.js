/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1280px'
      // => @media (min-width: 1280px) { ... }
    },

    colors: {
      'Text-green': '#13DA92',
      'black-background': '#151515',
      'white-background': '#ffffff',
      gray: '#575151'
    },
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
