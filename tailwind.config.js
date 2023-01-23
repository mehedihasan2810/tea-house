/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily : {
        manrope: ["Manrope", "sans-serif"]
      }
    },
    screens: {
      "sm" : "576px",
      "md" : "768px",
      "lg" : "992px",
      "xl" : "1024px",
      "2xl" : "1536px",
    }
  },
  plugins: [],
}
