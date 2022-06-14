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
        zIndex: {
         '-1': '-1',
        }
      }
    }
  };