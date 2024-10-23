/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF', // Example of a custom color
        secondary: '#FFAD1F',
        accent: {
          light: '#FFEDD5',
          DEFAULT: '#FF8800', // Default value for 'accent'
          dark: '#C05621',
        },
      },
    },
  },
  plugins: [],
}

