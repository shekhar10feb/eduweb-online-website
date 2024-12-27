/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./server/views/**/*.ejs",
    "./server/public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blueColor: "#004aad",
      },
      backgroundImage: {
        "hero-pattern": "url('/logo.png')",
      },
    },
  },
  plugins: [],
};
