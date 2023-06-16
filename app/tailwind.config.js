/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "670px",
      notebook: "1024px",
      desktop: "1280px",
    },
    extend: {
      animation: {
        fadeImage: "fade 0.5s ease-in-out",
      },
      colors: {
        yellowML: "#FEE600",
        grayML: "#EEE",
        grayTextML: "#333",
        blueML: "#3483FA",
      },
      keyframes: (theme) => ({
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
      }),
    },
  },
  plugins: [],
};
