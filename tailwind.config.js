// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),

      fafafa: '#fafafa',
      zereshki: '#572a47',
    }),
    colors: {
      buttonbrown: '#8A6B41 !important',
      selectbrown: '#A88355 !important',
      white: '#fff',
      Color929396: '929396',
    },
    spacing: {
      zero: '0',
      sssm: '.5rem',
      ssm: '1rem',
      sm: '3rem ',
      md: '9rem',
      lg: '16rem',
      xl: '22rem',
      xxl: '27rem',
      '60': '60rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
