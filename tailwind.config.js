// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      buttonbrown:'#8A6B41 !important',
      selectbrown:'#A88355 !important',
    },
    spacing: {
      zero:'0',
      ssm:'1rem',
      sm: "3rem ",
      md: "9rem",
      lg: "16rem",
      xl: "22rem",
      xxl:'27rem'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
