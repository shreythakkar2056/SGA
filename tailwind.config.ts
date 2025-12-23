import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        temple: {
          maroon: "#2C0D03", // Deep background
          red: "#800000",    // Accent
          saffron: "#FF9933",
          gold: "#FFD700",
          cream: "#FFF9E3",
          green: "#9ABF43",
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
};
export default config;