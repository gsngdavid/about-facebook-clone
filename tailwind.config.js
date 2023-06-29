/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "optimistic": "Optimistic"
      },
      colors: {
        "primary": "#1c2b33",
        "secondary": "#465a69",
        "anchor": "#385898",
        "gray-light": "#f1f4f7",
        "borderc": "#dee3e9"
      }
    },
  },
  plugins: [],
}

