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
      },
      screens: {
        sm: "300px",
      },
    },
  },
  plugins: [],
};
