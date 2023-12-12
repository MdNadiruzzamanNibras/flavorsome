/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepIndigo: "#0D1634",
        midnightBlue: "#000929",
        pastelPurple: "#E8E6F9",
        deepBlue: "#19213E",
      },
    },
  },
  plugins: [require("daisyui")],
};
