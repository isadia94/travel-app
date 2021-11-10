module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        cookie: ["Cookie", "cursive"],
        abril: ["Abril Fatface", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
