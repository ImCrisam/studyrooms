module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: "#000000",
      blue: "#27293f",
      red: "#FF7573",
      yellow: "#FBAD49",
      white: "#FFFFFF"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
