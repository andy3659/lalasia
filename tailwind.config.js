/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        eudoxus: ["Eudoxus-sans", "sans-serif"],
      },
    },
    colors: {
      primary: "#518581",
      secondary: "#FFB23F",
      title: "#151411",
      paragraph: "#AFADB5",
      placeholder: "#F9F9F9",
      screen: "#FFFFFF",
    },
  },
  plugins: [],
  backgroundImage: {
    "hero-bg": "url('/Rectangle 2.png')",
  },
};
