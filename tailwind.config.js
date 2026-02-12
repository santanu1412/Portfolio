/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: "#0a0a0a",
          dark: "#121212",
          gray: "#1e1e1e",
          primary: "#00f3ff", 
          secondary: "#7000ff",
          accent: "#ff003c",
          text: "#e0e0e0",
          dim: "#858585"
        }
      },
      fontFamily: {
        mono: ["Fira Code", "monospace"], 
        sans: ["Inter", "sans-serif"],
        cyber: ["Orbitron", "sans-serif"],
      },
      backgroundImage: {
        "cyber-grid": "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%2300f3ff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
