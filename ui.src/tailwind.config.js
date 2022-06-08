module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx}'
    ],
    theme: {
      fontFamily: {
        'title': ['Major Mono Display', 'monospace'],
        'body': ['DM Mono', 'monospace']
      },
      extend: {
        zIndex: {
         '-1': '-1',
        }
      }
    }
  };