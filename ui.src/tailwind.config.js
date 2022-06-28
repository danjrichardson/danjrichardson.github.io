module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx}'
    ],
    theme: {
      fontFamily: {
        'title': ['Cutive Mono', 'monospace'],
        'body': ['Cutive Mono', 'monospace']
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