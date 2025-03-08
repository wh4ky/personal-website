/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
