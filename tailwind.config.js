const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#005377",
        "absolute-white": "#FFFFFF",
        "primary-white": "#F7F7F7",
        "secondary-white": "#DEFFF5",
        "teal-seconday": "#00A8A8",
        "foam-tertiary": "#A3D9B1",
        "salmon-accent": "#FF6F61",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
