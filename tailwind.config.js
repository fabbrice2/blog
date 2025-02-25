/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ["Inter", "serif",],
      'retink': ["Rethink Sans", "serif",],
    },
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#1fb6ff',
        'dark': '#090D1F',
        'black': '#1A1A1A',
        'white': '#FFFFFF',
        'secondary-white': '#C0C5D0',
        'purple': '#6941C6',
        'secondary-purple': '#F9F5FF',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'blue': "#026AA2",
        'secondary-blue': "#F0F9FF",
        'pink': "#C11574",
        'secondary-pink': "#FDF2FA",
        'green': "#027A48",
        'secondary-green': "#ECFDF3",
        "border":  "#EAECF0",
        'secondary-orange': "#FFF6ED",
        "orange": "#C4320A",
        'secondary-red': "#FFF1F3",
        "red": "#C01048",
      },
    },
  },
  plugins: [],
}