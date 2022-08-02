module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx}'
    ],
    theme: {
      fontFamily: {
        'title': ['Nunito', 'sans-serif'],
        'body': ['Nunito', 'sans-serif'],
        'body-alt': ['Roboto', 'sans-serif'],
        'lead-in': ['d-dincondenseddinCnBd', 'sans-serif'],
      },
      extend: {
        gridAutoRows: {
          'screen-1/2': '50vh'
        },
        zIndex: {
         '-1': '-1',
        }
      }
    }
  };