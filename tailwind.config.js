const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      colorOne: '#274584',
      colorTwo: '#ffffff',
      colorThree: '#e3f6f9',
      colorFour: '#2b2b2b',
      colorFive: '#6c99e3',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
});
