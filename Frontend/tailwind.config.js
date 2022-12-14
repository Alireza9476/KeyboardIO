/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        header_btn: {
          DEFAULT: "#DA81F5",
          100: "#D358F7",
        },
        entered_word: {
          DEFAULT: "#BDBDBD",
        },
      },
      screens: {
        // sm: "300px",
        sxm: "300px",
      },
      fontFamily: {
        roboto_light: ["roboto-light"],
        roboto_light_bold: ["roboto-light-bold"],
        roboto_regular: ["roboto-regular"],
      },
    },
  },
  plugins: [],
};
