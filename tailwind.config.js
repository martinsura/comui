const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  future: {},
  purge: {
    enabled: process.env.NODE_ENV == "production" ? true : false,
    content: ["./src/**/*.tsx"],
  },
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
