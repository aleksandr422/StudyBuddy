/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#7C5CFC",
        background: "#FFFFFF",
        card: "#F5F3FF",
        text: "#1A1A2E",
        textMuted: "#6B7280",
      },
    },
  },
  plugins: [],
};
