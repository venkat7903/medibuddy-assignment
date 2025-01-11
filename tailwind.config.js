/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px", // Custom breakpoint for extra small devices
      sm: "576px",
      md: "763px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {},
    fontFamily: {
      signature: ["Roboto", "Great vibes"],
    },
  },
  plugins: [],
};
