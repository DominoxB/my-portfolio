/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"'],
      },
      spacing: {
        "2/3": "66.666667%",
      },
    },
  },
  plugins: [],
};
