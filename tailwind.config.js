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
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        wave1: "wave 1s ease-in-out infinite",
        wave2: "wave 1s ease-in-out 0.2s infinite",
        wave3: "wave 1s ease-in-out 0.4s infinite",
        wave4: "wave 1s ease-in-out 0.6s infinite",
      },
    },
  },
  plugins: [],
};
