/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        md2: "0px 7px 11px -2px rgba(255, 255, 255, 0.54) inset",
        md3: "0px -9px 10px 0px rgba(255, 255, 255, 0.3) inset;",
        rd: "0px 0px 83px 64px rgba(34, 60, 80, 0.2);",
      },
      dropShadow: {
        rd2: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        rd3: "0px 0px 7px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
