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

    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      custom: '22px'
    },

    colors: {
      'Text-green': '#13DA92',
      'light-green': '#12ECA0',
      'black-background': '#151515',
      'white-background': '#ffffff',
      gray: '#575151',
      form: '#221F1F'
    },
    extend: {
      lineHeight: {
        'extra-loose': '3rem'
      },
      CustomShadow: {
        '3xl': '0 35px 60px -15px rgba(256, 256, 256, 1)'
      },
      width: {
        custom1: '40rem',
        custom2: '50rem',
        custom3: '40rem',
        custom4: '40rem',
        custom5: '40rem',
        custom6: '40rem'
      },
      margin: {
        custom: '36rem',
        form1: '19.5rem',
        form2: '16.5rem',
        form3: '17rem',
        form4: '18rem',
        form5: '18rem',
        form6: '21.5rem',
        form7: '20rem',
        form8: '21rem',
        form9: '22rem'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
