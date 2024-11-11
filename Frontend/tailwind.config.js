// tailwind.config.js
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#F5F5F5",
        accent: "#22c55e",
        parrallex: "173B45",
        tintblCK: "021526", // Customize these colors based on your preference
      },
      fontFamily: {
        sans: ["poppins", "sans-serif"],
      },
      margin: {
        23: "5.5rem",
      },
    },
  },
  plugins: [],
};
