module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans"],
        bellefair: ['"Bellefair"', "sans"]
      }
    },
  },
  plugins: [],
}