const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["logoFont"],
        titleFont: ["titleFont"],
      },
      colors: {
        white: "#FFFFFF",
        gray: {
          darkest: "#202225",
          darkestV: "#292b2f",
          dark: "#2f3136",
          default: "#36393f",
          light: "#8e9094",
        },
        green: {
          default: "#3ba55d",
        },
        blue: {
          dark: "#3498DB",
          default: "#2E86C1",
        },
      },
      gridTemplateColumns: {
        gidRes: "repeat(auto-fill, minmax(288px, 1fr))",
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
  purge: ["./src/components/**/*.js"],
};
