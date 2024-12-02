import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#13DAB0",
        secondary: "",
        background: "#ffffff",
        foreground: "",
        front: "#000a01",
        back: "",
        muted: "#ababbb",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
      },
      zIndex: {
        "1": "1",
      },
      strokeWidth: {
        "3": "3",
      },
    },
  },
  plugins: [],
} satisfies Config;
