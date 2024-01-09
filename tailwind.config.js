/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '100%': '100% 100%',
      },

      fontFamily: {
        'inter': 'Inter, sans-serif',
        'ff-mont': 'Montserrat ,sans-serif',
        'Rubik' : 'Rubik, sans-serif',
    'work' : 'Public Sans, sans-serif'
      },
      boxShadow: {
        'shadow': '0px 100px 200px 0px rgba(1, 23, 54, 0.10);',
        'button': '0px 10px 14px 0px rgba(49, 62, 247,0.25);'
      },
      screens: {
        'xs': "576px",
        'xxs': "450px",
        '400': '400px',
        'lgg' : '992px',
        '900' : '900px',
        '1200' : '1200px',
      },
   
    },
  },
  plugins: [],
}