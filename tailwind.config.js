const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.js'
  ],
  safelist: [
    { pattern: /svg.*/ },
    { pattern: /fa.*/ }
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        orange: colors.orange,
        teal: colors.teal
      },
      height: {
        'logo-sm': '8rem',
        'logo-lg': '16rem'
      },
      width: {
        'logo-sm': '8rem',
        'logo-lg': '16rem'
      }
    },
  }
}
