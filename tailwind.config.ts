import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      loginBox: "#CACDDE",
      loginButton: "#3A46AE",
      white: "#FFFFFF",
      headerColor: "#A5D0F8",
    },
  },
  plugins: [],
} satisfies Config;
