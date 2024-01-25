import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "linear-gradient(4deg, rgba(239,250,238,0) 0%, rgba(254,252,248,1) 35%)",
      },
      colors: {
        yellow: {
          10: "#F8F5F0",
        },
        white: {
          0: "#FFFFFF",
          10: "#FEFCF8",
        },
      },
    },
  },
  plugins: [],
};
export default config;
