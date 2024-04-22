import theme from "@cencommerce/paris-uikit/src/themes/default-theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "ht-",
  corePlugins: {
    preflight: false,
  },
  theme,
  plugins: [],
};
