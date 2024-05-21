/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSens: ["Open Sans", "sans-serif"],
      },
      textShadow: {
        text: "0 0 5px red",
      },
    },
  },
  plugins: [],
};
