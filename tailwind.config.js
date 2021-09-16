const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
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
        'logo-sm': '8rem',
        'logo-lg': '16rem'
      },
      width: {
        'logo-sm': '8rem',
        'logo-lg': '16rem'
      }
    },
  },
  variants: {
    extend: {},
  }
}
