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
      footer: '#151313',
      'white-background': '#ffffff',
      gray: '#575151',
      form: '#221F1F',
      DarkBlack: '#000000',
      orange: '#ea580c',
      darkGreen: '#39BF97',
      progressBar: '#D9D9D9',
      red: '#CB0E3B',
      blue: '#2399B4'
    },
    extend: {
      lineHeight: {
        'extra-loose': '3rem'
      },
      boxShadow: {
        green: '0px 0.28rem 0.28rem 0px rgba(18, 236, 160, 1)',
        orange: '0px 0.28rem 0.28rem  0px rgba(255, 127, 39, 1)',
        red: '0px 0.28rem 0.28rem  0px rgba(194, 5, 51, 1)',
        blue: '0px 0.28rem 0.28rem  0px rgba(14, 182, 235 , 1)'
      },
      width: {
        custom1: '40rem',
        custom2: '50rem',
        custom3: '80rem',
        custom4: '18rem',
        custom5: '100%',
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
      },
      height: {
        fullPage: '140vh'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
