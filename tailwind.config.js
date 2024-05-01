/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./styles/**/*.{html,js}","./*"],
  theme: {
    extend: {
      colors:[
        {
          "ecoshield":"#000",
        }
      ]
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}