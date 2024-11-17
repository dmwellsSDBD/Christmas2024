/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
        'red': '#800000',
        'green': '#4A817B',
        'white': '#ffffff',
        'dkRed': '#560000',
        'dkGreen': '#293938',
        'rdGray': '#9A6767'
    },
    minHeight: {
      'mobile': '15rem',
      'tablet': '20rem',
      'section': '25rem',
      'header': '40rem',
      'cards': '25rem',
      'smCard': '10rem',
    },
    extend: {
      fontFamily: {
        "xmas1": ["Mountains of Christmas", "serif"],
        "xmas2": ["Caveat Brush", "cursive"],
        "xmas3": ["Delius", "sans-serif"],
        "xmas4": ["Henny Penny", "system-ui", "serif"]
      },
      backgroundImage: {
        'hero-home': "url('/src/img/hero-index.jpg')",
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('tailwind-fontawesome')
  ],
}
