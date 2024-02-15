import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        'product-sans': ['Product Sans Regular', 'sans-serif'],
      },

      colors: {
        "yellow": "#f3bc18",
        "blue":
        {
          "lightest": "#48AADF",
          "light": "#4078bc",
          "dark": "#2D3E51"
        },
        "gray": "#364455"

      },
    },
  },
  plugins: [],
};
export default config;
