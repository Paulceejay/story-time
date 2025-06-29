/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: [
    // Ensure this points to your source code
    './app/**/*.{js,tsx,ts,jsx}',
    // If you use a `src` directory, add: './src/**/*.{js,tsx,ts,jsx}'
    // Do the same with `components`, `hooks`, `styles`, or any other top-level directories
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          primary: '#E28600',
          white: '#FFFFFF',
          black: '#010100',
          text: '#ECEDEE',
          background: '#222020',
          formBtn: "#181717",
          lightGray: "#C0C0C0",
          formBg: "#FFFFFF0A",
          bgSearch: "#0A0908"
        },
      },
      fontFamily: {
        'Pacifico': ['Pacifico', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'MontserratAlt': ['MontserratAlt', 'Montserrat'],
        'Pompiere': ['Pompiere', 'Pacifico'],
      },
    },
  },
  plugins: ['react-native-reanimated/plugin'],
  
}