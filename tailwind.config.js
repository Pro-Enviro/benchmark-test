module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1440px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "25px",
          sm: "25px",
          md: "25px",
          xl: "30px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
