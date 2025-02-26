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
      textShadow: {
        lg: "2px 2px 4px rgba(0,0,0, 0.5)",
      },
    },
  },
  plugins: [],
};
