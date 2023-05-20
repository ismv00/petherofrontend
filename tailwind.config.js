/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        background: "#E9E9E9",
        hero: "FFBD59",
      },
    },
  },
  plugins: [],
};
