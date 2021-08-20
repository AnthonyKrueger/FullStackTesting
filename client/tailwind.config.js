module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        orange: {
          light: "#ff9b54",
          dark: "#ff7f51"
        },
        red: {
          light: "#ce4257",
          dark: "#720026",
          deep: "#4f000b"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
