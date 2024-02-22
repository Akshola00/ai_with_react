/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'Roboto': ['"Roboto"', 'cursive'],
        'Fredoka': ['"Fredoka"', 'cursive'],
        'Anta': ['"Anta"', 'cursive'],
        'Kdam': ['"Kdam Thmor Pro"', 'cursive'],
        'Varela': ['"Varela Round"', 'sans'],
        'Lexend': ['"Lexend Deca "', 'cursive'],
      },
    },
  },
  plugins: [],
}

