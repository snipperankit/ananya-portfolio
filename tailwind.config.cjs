/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        pagebg:        '#e8efe8',   // muted sage — warm and colorful, not sterile white
        'pagebg-dark': '#0f1211',
        ink:           '#191d1b',
        'ink-dark':    '#e8ece9',
        accent:        '#1f6b4f',
        'accent-dark': '#4fbe93',
        card:          '#f0f5f0',   // slightly lighter sage for card lift
        'card-dark':   '#171a19',

        // ── Swap-in accents ──────────────────────────────────────────
        // Don't like green? Replace `accent` / `accent-dark` above with one:
        //   Signal cobalt   accent '#2551c9'  accent-dark '#6d92ff'
        //   Marigold amber  accent '#b7791f'  accent-dark '#e6a94b'
        //   Refined clay    accent '#a8492b'  accent-dark '#e07a52'
        //   Deep aubergine  accent '#6d3a63'  accent-dark '#c07ab5'
      },
      fontFamily: {
        // display → headlines & big numbers. NEW font — add the <link>
        //           (see the note in the message). Characterful grotesk,
        //           not the serif-hero cliché.
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // body → long-form reading only (case studies). Already loaded.
        body: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        // ui → labels, nav, data, buttons. Already loaded.
        ui: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
