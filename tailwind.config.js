/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ewbi-gold": "#EDB155",
        "ewbi-red": "#46171C",
        "ewbi-page": "#FAF0E0"
      }
    },
    fontFamily: {
      cursive: "Parisienne, cursive",
      serif: "Rokkitt, serif",
    },
  },
  plugins: [],
};
