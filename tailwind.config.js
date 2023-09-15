/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    
    },
  },
  
 
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0067ED",

          secondary: "#2B59FF",

          accent: "#f49a09",

          neutral: "#707070",

          "base-100": "#e9e8f2",

          info: "#aad3e4",

          success: "#1e8056",

          warning: "#efa748",

          error: "#eb635c",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
