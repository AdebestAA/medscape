/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
     colors:{
        "register-bg":"#ecf1f9",
        "white":"#fff",
        "inputFormColor":"#f4f3f3",
        "linkColor":"#064aa7",
        "createAccountBtnColor": "#064aa7",
        "borderColor":"#064aa7",
        "registerStepsColor":"#0a94c2",
        "greenChecked":"green",
        "black":"#000",
        "navy":"navy",
        "gray-shade1":"#b1b0b0",
        "show":"red",
        "show2":"yellow",
        "show3":"blue",
        "anotherColor":"#666666"
      },
          screens: {
      xxl:"1100px",
      xl:"900px",
      lg:"750px",
      md:"600px",
      sm:"380px",
      xsm:"320px"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
