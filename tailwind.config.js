/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "xw-",
  content: ["**/*.html", "**/*.tsx"],
  theme: {
    extend: {
      colors: {
        myCustomColor: "var(--my-custom-color)",
      },
    },
  },
  plugins: [],
};
