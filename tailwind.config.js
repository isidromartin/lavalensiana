/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./blog.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D4A373", // Color dorado rústico
        secondary: "#A68A64", // Marrón elegante
        background: "#F8F1E5", // Beige claro
        dark: "#403D39", // Gris oscuro
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Tinos", "serif"],
        elegant: ["'Alegreya SC'", "serif"],
        script: ["'Kaushan Script'", "cursive"],
        cookies: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
