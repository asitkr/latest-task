/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        astronautFly: {
          "0%": { left: "-100px", transform: "rotate(0deg)" },
          "25%": { top: "50%", transform: "rotate(30deg)" },
          "50%": { top: "55%", transform: "rotate(45deg)" },
          "75%": { top: "60%", transform: "rotate(30deg)" },
          "100%": { left: "110%", transform: "rotate(45deg)" },
        },
        starTwinkle: {
          "0%, 100%": { background: "rgba(255,255,255,0.4)" },
          "25%": { background: "rgba(255,255,255,0.8)" },
          "50%": { background: "rgba(255,255,255,1)" },
          "75%": { background: "rgba(255,255,255,0.8)" },
        },
      },
      animation: {
        astronautFly: "astronautFly 6s infinite linear",
        starTwinkle: "starTwinkle 3s infinite linear",
      },
    },
  },
  plugins: [],
}