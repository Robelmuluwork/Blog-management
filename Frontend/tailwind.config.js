// tailwind.config.js
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#F5F5F5",
        accent: "#22c55e", // Customize these colors based on your preference
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
