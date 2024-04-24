import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A46AE",
        secondary: "#CACDDE",
        accent: "#D9D9D9",
        headerColor: "#A5D0F8",
      },
    },
  },
  plugins: [],
} satisfies Config;
