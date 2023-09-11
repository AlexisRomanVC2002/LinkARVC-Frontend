/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "Brand-Primary-Pink": "#EB568E",
      "Brand-Primary-Blue": "#144EE3",
      "Black": "#0B101B",
      "Grey": "#181E29",
      "Lite": "#C9CED6",
      "Blue-Low": "#323e59",
      "Blue-Hight": "#0e131e"
    },
    extend: {},
    fontFamily: {
      SF_Pro_Display_Bold : ["SF Pro Display Bold", "sans-serif"],
      SF_Pro_Display_Medium : ["SF Pro Display Medium", "sans-serif"],
      SF_Pro_Display_Regular : ["SF Pro Display Regular", "sans-serif"],
    },
  },
  plugins: [],
}

