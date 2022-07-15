/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceRanger: 'SpaceRanger, sans'
      }
    },
    fontFamily: {
      'roboto': ['roboto', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
  ,
}