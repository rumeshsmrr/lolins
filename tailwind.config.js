/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161616",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        assent: "#A39595",

        primaryText: "white",
        secondaryText: "#E6E4D8",
      },
      fontFamily: {
        primaryFont: ["primaryFont", "serif"],
      },
    },
  },
  plugins: [],
};
