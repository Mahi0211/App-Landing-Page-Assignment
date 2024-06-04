/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clashDisplayBold: ["ClashDisplay-Bold", "sans-serif"],
        clashDisplayExtraLight: ["ClashDisplay-Extralight", "sans-serif"],
        clashDisplayLight: ["ClashDisplay-Light", "sans-serif"],
        clashDisplayMedium: ["ClashDisplay-Medium", "sans-serif"],
        clashDisplayRegular: ["ClashDisplay-Regular", "sans-serif"],
        clashDisplaySemiBold: ["ClashDisplay-Semibold", "sans-serif"],
      },
      backgroundImage: {
        'noise-texture': "url('./src/icons/Rectangle.png')"
      },
      rotate: {
        '28': '28deg'
      }
    },
  },
  plugins: [],
};
