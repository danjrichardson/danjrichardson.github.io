module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
    theme: {
      fontFamily: {
        'title': ['Major Mono Display', 'monospace'],
        'body': ['DM Mono', 'monospace']
      }
    }
  };