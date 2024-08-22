/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'custom-gradient': 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.1))',
      },
      colors: {
        'dynamic-bg': '#000000', // Default value, can be overridden
      },
    },
    transitionProperty: {
      'bg': 'background-color', // Custom transition property for background color
    },
    transitionDuration: {
      'default': '1000ms', // Default transition duration
    },
  },
  plugins: [],
}

