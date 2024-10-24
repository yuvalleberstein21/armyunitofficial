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
          light: '#166534',
          DEFAULT: '#052e16', // Default value for 'accent'
          dark: '#052e16',
        },
      },
    },
  },
  plugins: [],
}

