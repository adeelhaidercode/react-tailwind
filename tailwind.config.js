/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  lightMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        chart: "16rem", // This is a custom height class
      },
      spacing: {
        "-10.5": "-42px", // Tailwind uses "rem" by default, so you might want to convert pixels to rem if you're strictly following Tailwind's sizing scale. Here it's direct px for simplicity.
      },
      screens: {
        xs: "320px",
        "2xl": "1560px",
        "5xl": "1500px",
        "3xl": "2000px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
