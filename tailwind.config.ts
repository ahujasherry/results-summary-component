import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      hankenGrotesk: [
        "var(--font-hanken-grotesk)",
        {
          fontFeatureSettings: "'liga' off, 'clig' off",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
