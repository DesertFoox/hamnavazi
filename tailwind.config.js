// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      buttonbrown: "#8A6B41 !important",
      selectbrown: "#A88355 !important",
      textcolor: "#CCA679",
      white: "#fff",
      gold: "#FCBE4A",
      "572a47": "#572a47 !important",
    },
    fontSize: {
      13: "13px",
    },
    spacing: {
      zero: "0",
      sssm: ".5rem",
      "2rm": "2rem ",
      ssm: "1rem",
      sm: "3rem ",
      md: "9rem",
      lg: "16rem",
      xl: "22rem",
      "34rm": "34rem !important",
      xxl: "27rem",
      60: "60rem",
      "33rm": "33rem !important",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px !important",
      large: "12px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
