/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        galileoGray: {
          400: '#aee6f420'
        },
        galileoPurple: {
          200: '#eaddd7',
          300: '#382B44',
          400: '#372157',
          700: '#977669',
          900: '#0d0219',
        },
      },
      backgroundImage: {
        'colored-waves': "url('/bgImageWaves.svg')"
      },
    },
  },
  plugins: [],
}
