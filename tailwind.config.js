const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js'],

    options: {
      safelist: [/svg.*/, /fa.*/]
    }
  },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
        orange: colors.orange,
        teal: colors.teal
      },
      height: {
        'logo-sm': '128px',
        'logo-lg': '256px'
      },
      width: {
        'logo-sm': '128px',
        'logo-lg': '256px'
      }
    },
  },
  variants: {
    extend: {},
  }
}
