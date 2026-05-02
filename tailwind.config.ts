import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05060A",
          900: "#0A0B11",
          800: "#11131C",
          700: "#1A1D2A",
          600: "#262A3B",
          500: "#3A3F55",
        },
        brand: {
          50: "#EAFBF1",
          100: "#C9F4DC",
          200: "#94E8B9",
          300: "#5DD994",
          400: "#2EC772",
          500: "#16B05F",
          600: "#0E8E4C",
          700: "#0B6E3C",
          800: "#0A5631",
          900: "#073C22",
        },
        accent: {
          lime: "#C6F84B",
          mint: "#7CF5C2",
          violet: "#9F7BFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,199,114,0.18), transparent 60%)",
        "radial-spot":
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(198,248,75,0.18), transparent 60%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
