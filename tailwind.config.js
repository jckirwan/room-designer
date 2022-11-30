/** @type {import('tailwindcss').Config} */
const defaultConfig = require("@owl-labs/owl-ui/defaultConfig");
module.exports = {
  darkMode: "class",
  presets: [defaultConfig],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
