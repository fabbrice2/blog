/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FAFAFA',
        'black': '#1A1A1A',
        'dark': '#090D1F',       
        'gray': '#C0C5D0',
        'light': '#FFFFFF',
        'green': '#027A48',
        'red': '#C01048',
        'purple': '#6941C6',   
        'pink': '#C11574',
        'pink-secondary': '#FDF2FA',
        'green-secondary': '#ECFDF3',
        'red-secondary': '#FFF1F3',
        'purple-secondary': '#F9F5FF',
      },
    },
  },
  plugins: [],
}