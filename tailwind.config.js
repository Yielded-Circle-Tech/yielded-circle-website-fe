/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#7e21d4",
          dark: "#21004b",
          deep: "#4b0082",
          accent: "#7630ff",
          soft: "#9683ec",
          light: "#f3edff",
        },
        page: {
          bg: "#fcf9ff",
          surface: "#f6f1ff",
          elevated: "#efe7ff",
          border: "#ddcff6",
          borderStrong: "#c8b1ed",
          text: "#21004b",
          textMuted: "#5b3f84",
        },
      },
      boxShadow: {
        brand: "0 10px 28px rgba(118, 48, 255, 0.24)",
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
