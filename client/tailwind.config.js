/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // Example of a custom color
        secondary: '#18181b',
        accent: {
          light: 'rgb(222, 190, 93)',
          DEFAULT: '#0c0a09',
          dark: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
}

