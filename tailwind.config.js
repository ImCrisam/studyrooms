module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    fontFamily: {
      'sans': ['Segoe', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#FBAD49",
        secondary: "#27293f",
        tertiary: "#FF7573",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
