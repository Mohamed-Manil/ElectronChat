const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "media",
  mode: "jit",
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
          darkestIV: "#242629",
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
        gridMain: "80px 240px auto",
        gridMessage: "min-content min-content",
      },
      gridTemplateRows: {
        gridFrame: "24px auto",
      },
      scale: {
        101: "1.01",
      },
      animation: {
        loader: "loader 0.6s infinite alternate",
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: "translate3d(0, -1rem, 0)",
          },
        },
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
  purge: [
    "./src/components/**/*.js",
    "./src/components/*js",
    "./src/js/App.js",
    "./src/views/*.js",
  ],
};
