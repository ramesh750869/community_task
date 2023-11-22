/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "ecm-color-palette": "#887c68",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#f6f6f6",
        },
        goldenrod: "rgba(249, 187, 78, 0.7)",
        gray: "#0d1b2a",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "martel-sans": "'Martel Sans'",
      },
    },
    fontSize: {
      base: "16px",
      "3xl": "22px",
      xl: "20px",
      "26xl": "45px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
