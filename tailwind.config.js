module.exports = {
  purge: {
    enabled : true,
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
         purple: {
        850 : '#3B286D'
        },
        gray :{
          1000: '#B7B7B7'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
