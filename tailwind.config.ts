import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(10, 15, 13)", // Based on Color(red: 0.04, green: 0.06, blue: 0.05)
        card: "rgb(20, 31, 26)", // Based on Color(red: 0.08, green: 0.12, blue: 0.10)
        "card-hover": "rgb(31, 41, 36)",
        primary: "rgb(48, 209, 89)", // Accent Green
        secondary: "rgb(179, 191, 184)", // Text Secondary
        "accent-purple": "rgb(191, 89, 242)",
        "accent-orange": "rgb(255, 153, 0)",
        "accent-blue": "rgb(0, 153, 255)",
        "accent-red": "rgb(255, 69, 59)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        glass:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
