/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 -1px 3px rgba(0, 0, 0, 0.1), 1px 0 3px rgba(0, 0, 0, 0.1), -1px 0 3px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
