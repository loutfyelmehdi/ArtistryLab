import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#0055A4",
      secondary: "#F2DF2C",
      dark: "#212223",
      blackish: "#131111",
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          'linear-gradient(to right, #212223, rgba(0, 0, 0, 0)),linear-gradient(to top, #212223, rgba(0, 0, 0, 0)), url("/herobg.jpeg") ',
        "hero-pattern-nogradient":
          'linear-gradient(to bottom, #212223, rgba(0, 0, 0, 0)), linear-gradient(to top, #212223, rgba(0, 0, 0, 0)), url("/herobg.jpeg") ',
        "project-pattern":
          "linear-gradient(to left, #212223, rgba(0, 0, 0, 0))",
      },
    },
  },
  plugins: [],
};
export default config;
