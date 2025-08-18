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
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "25%": { transform: "translateX(25vw) translateY(-20px) rotate(20deg)" },
          "50%": { transform: "translateX(50vw) translateY(20px) rotate(40deg)" },
          "75%": { transform: "translateX(75vw) translateY(-20px) rotate(20deg)" },
          "100%": { transform: "translateX(110vw) translateY(0) rotate(40deg)" },
        },
        starTwinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        blob: {
          "0%": { transform: "translate(-100%, -100%) translate3d(0,0,0)" },
          "25%": { transform: "translate(-100%, -100%) translate3d(100%,0,0)" },
          "50%": { transform: "translate(-100%, -100%) translate3d(100%,100%,0)" },
          "75%": { transform: "translate(-100%, -100%) translate3d(0,100%,0)" },
          "100%": { transform: "translate(-100%, -100%) translate3d(0,0,0)" },
        },
      },
      animation: {
        astronautFly: "astronautFly 12s linear infinite",
        starTwinkle: "starTwinkle 3s infinite ease-in-out",
        blob: "blob 5s infinite ease",
      },
    },
  },
  plugins: [],
}