/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#212738', 
      },
      fontFamily: {
        'avant-bold': ['"Jost"', 'sans-serif'],
        'avant-book': ['"Jost"', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.3s ease-in-out',
      }
    },
  },
  plugins: [],
};