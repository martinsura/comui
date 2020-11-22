const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  future: {},
  purge: {
    enabled: process.env.NODE_ENV == "production" ? true : false,
    content: ["./src/**/*.tsx"],
  },
  theme: {
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: "#303f9f",
        "default-button-background": "#fff",
        border: "#e5e5ea",
        "black-color": "#414141",
        "red-color": "#dc3545",
        "green-color": "#28a745",
      },
    },
  },
  variants: {
    variants: {},
  },
  plugins: [require("@tailwindcss/forms")],
  corePlugins: {
    preflight: true,
  },
};
