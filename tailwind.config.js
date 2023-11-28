/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        letsConnect: "url(/profile/letsConnect.png)",
      },
      fontFamily: {
        eurostile: ["eurostile", "sans-serif"],
        patrickhand: ["Patrick Hand", "cursive"],
        quickpen: ["Quickpen", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
