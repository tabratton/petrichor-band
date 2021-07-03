const colors = require('tailwindcss/colors')

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.js'] },
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
        'light-black': 'rgb(15, 15, 15)'
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
