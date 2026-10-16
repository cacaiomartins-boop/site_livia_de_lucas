/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oliva: "#7C650F",
        "oliva-escuro": "#5E4C0A",
        mostarda: "#E9A21B",
        terracota: "#C9582E",
        marrom: "#6E2F22",
        creme: "#F1DFA4",
        papel: "#FBF5E1",
        tinta: "#3B2417",
      },
      fontFamily: {
        sans: ["Jost", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
