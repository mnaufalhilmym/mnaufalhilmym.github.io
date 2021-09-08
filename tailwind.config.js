module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "my-photo": "url('/images/1623630178478.jpg')",
      },
      spacing: {
        "30": "7.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
