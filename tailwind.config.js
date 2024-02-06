/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    colors: {
      redblub: '#B82032',
      blueblub: '#3D51C1',
      greyblub: '#F8F8F8',
      red: '#FF0000',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}