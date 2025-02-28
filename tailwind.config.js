/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["raleway", "serif"],
        Roboto: ["Roboto", "serif"],
      },
      animation: {
        bounceSlow: " bounce 15s infinite",
      },
    },
  },
  plugins: [],
};
