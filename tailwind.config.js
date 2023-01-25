/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily : {
        manrope: ["Manrope", "sans-serif"]
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(270deg, rgba(255, 0, 0, 0.1) 0%, rgba(255, 137, 56, 0.1) 100%)"
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
