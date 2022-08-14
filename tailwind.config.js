/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#00B0D7",
        "custom-gray": "#5F5E61",
      },
      borderRadius: {
        "custom-radius": "33px",
        "custom-radius-card": "60px",
      },
      fontSize: {
        big: "28px",
        filter: "25px",
      },
      width: {
        "card-circle-sm": "72px",
        "card-w-laptolL": "330px",
        "card-w-md": "350px",
        "card-w-lg": "365px",
        "card-w-xl": "375px",
      },
      height: {
        "card-circle-sm": "72px",
        "card-h-md": "265px",
        "card-h-lg": "300px",
        "card-h-xl": "315px",
      },
      screens: {
        xxs: "320px",
        xs: "425px",
        laptopL: "1440px",
        fullHD: "1920px",
      },
    },
  },
  plugins: [],
};
