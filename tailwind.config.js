/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#010409",
        dark: "#0d1117",
        "dark-200": "#161b22",
        "dark-300": "#1a212d",
        white: "#ffffff",
        "white-200": "#c0c8d0",
        "white-300": "hsla(0, 0%, 100%, 0.8)",
        gray: "#343941",
        "gray-200": "#8b949e",
        "gray-300": "#8b949e96",
        "gray-400": "#2b3138",
        "gray-500": "#888888",
        success: "#39d353",
        "success-200": "#26a641",
        "success-300": "#006d32",
        "success-400": "#0e4429",
        primary: "#1f6feb",
        "primary-200": "#1766e1",
        "primary-300": "#1764e164",
        "primary-900": "#1f71eb2e",
        danger: "#da3633",
        warning: "#b98820",
        gold: "#ffdc18",
        info: "#9668e3",
      },
    },
  },
  plugins: [],
};
