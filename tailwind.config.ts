/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'cormorant': ['var(--font-cormorant)', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'bebas': ['var(--font-bebas)', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#061526',
          deep: '#0B3C5D',
          mid: '#1E3A5F',
        },
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '800': '800ms',
      },
      padding: {
        '13': '52px',
      },
      margin: {
        '4.5': '18px',
        '5.5': '22px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
};