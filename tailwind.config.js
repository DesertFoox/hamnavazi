// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),

      fafafa: '#fafafa',
      zereshki: '#572a47',
    }),
    colors: {
<<<<<<< HEAD
      buttonbrown: '#8A6B41 !important',
      selectbrown: '#A88355 !important',
      white: '#fff',
      
=======
      buttonbrown: "#8A6B41 !important",
      selectbrown: "#A88355 !important",
      black :'black !important',
      textcolor: "#CCA679",
      white: "#fff",
      gold: "#FCBE4A",
      "572a47": "#572a47 !important",
      e8e8e9: "#e8e8e9",
      b6b8bb: "#b6b8bb",
      "8a6b41": "#8a6b41",
      d48c8c: "#d48c8c",
      c79c69: '#c79c69',
      '707070':'#707070',
      Color929396: '929396',
    },
    fontSize: {
      12: "10px !important",
      13: "14px",
      16: "16px",
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
>>>>>>> 211212c60659b4432234e1b3df5d6896a143558f
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
