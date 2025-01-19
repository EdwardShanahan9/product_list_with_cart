/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c73a0f",
        secondary: "##1ea475",
        rose900: "#260f08",
        rose500: "#87635a",
        rose400: "#ad8985",
        rose300: "#c9aea6",
        rose100: "#f4edeb",
        rose50: "#fcf9f7",
      },
      fontFamily: {
        primaryRegular: ["Regular"],
        primaryMedium: ["Medium"],
        primaryBold: ["Bold"],
      },
    },
  },
  plugins: [],
};
