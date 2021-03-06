// tailwind.config.js
module.exports = {
  purge: { content: ["src/**/*.js", "src/**/*.jsx", "public/**/*.html"] },
  darkMode: false, // or 'media' or 'class'
  enabled: process.env.NODE_ENV === "production",
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),

      fafafa: "#fafafa",
      zereshki: "#572a47",
      eeeeee: "#eeeeee",
      average: "#f67f00",
      advanced: "#d52828",
    }),
    colors: {
      buttonbrown: "#8A6B41 !important",
      selectbrown: "#A88355 !important",
      a88355: "#a88355 !important",
      "6b522d": "#6b522d !important",
      dark_buttonbrown: "#818385 !important",
      dark_selectbrown: "#9b9d9f !important",
      black: "black !important",
      textcolor: "#CCA679",
      transparent: "transparent",
      white: "#fff",
      gold: "#FCBE4A",
      "797a7c": "#797a7c",
      "413f40": "#413f40",
      "572a47": "#572a47 !important",
      e8e8e9: "#e8e8e9",
      b6b8bb: "#b6b8bb",
      "8a6b41": "#8a6b41",
      d48c8c: "#d48c8c",
      ffffcf: "#ffffcf",
      a88355: "#a88355 !important",
      c79c69: "#c79c69",
      707070: "#707070",
      C9292396: "#929396",
      C4b4a4c: "#4b4a4c",
    },
    fontSize: {
      "1half1":"1.6rem",
      "1half":"1.5rem",
      1: "1rem",
      2: "2rem",
      12: "10px !important",
      13: "14px",
      16: "16px",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "2rem",
      md: "1rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
      img_shadow: " 0 3px 10px 0 rgba(0, 0, 0, 0.45)",
    },
    borderColor: (theme) => ({
      DEFAULT: theme("colors.gray.300", "currentColor"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      b522d: "#6b522d !important",
      danger: "#e3342f",
      gh: "#6b522d !important",
      dark_gh: "#67686a !important",
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    spacing: {
      zero: "0 !important",
      sssm: ".5rem",
      rem2: "2rem ",
      ssm: "1rem !important",

      sm: "3rem ",
      md: "9rem",
      md2: "14rem",
      lg: "16rem",
      xl: "22rem",
      "34rm": "34rem !important",
      xxl: "27rem",
      60: "60rem",
      "2rm": "2rem",
      "100s": "69% !important",
      13: "13rem !important",
      "33rm": "33rem !important",
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem !important",
      lg: "0.7rem !important",
      full: "9999px !important",
      large: "12px",
    },
    extend: {
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        13: "3.5rem",
        14: "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
