/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./styles/**/*.{html,js}","./pages/**/*"],
  theme: {
    extend: {
      colors:[
        {
          "ecoshield":"#000",
        }
      ]
    },
  },
  plugins: [],
}