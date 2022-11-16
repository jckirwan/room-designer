
/** @type {import('tailwindcss').Config} */
const defaultConfig = require("@owl-labs/owl-ui/defaultConfig");
module.exports = {
presets: [defaultConfig],
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
    extend: {},
},
plugins: [],
};