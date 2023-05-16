/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    //dentro do extends coloca a cor de fundo
    extend: {
      colors: {
        background: "#E9E9E9",
        hero: "FFBD59",
      },
    },
  },
  plugins: [],
};
