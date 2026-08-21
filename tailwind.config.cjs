/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        pagebg:        '#f4f1ea',
        'pagebg-dark': '#121110',
        ink:           '#1a1712',
        'ink-dark':    '#ece7de',
        muted:         '#6f695f',
        'muted-dark':  '#9c948a',
        accent:        '#ad6b3a',
        'accent-dark': '#d69c5f',
        card:          '#ffffff',
        'card-dark':   '#1b1a17',
      },
      fontFamily: {
        display: ['Newsreader', 'Georgia', 'ui-serif', 'serif'],
        body: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        ui: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      }
    }
  },
  plugins: []
}
