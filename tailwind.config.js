/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ["./styles/**/*.{html,js}","./index.html","./request.html"],
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