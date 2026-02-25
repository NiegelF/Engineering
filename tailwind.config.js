/** @type {import("tailwindcss").Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          900: "#030712",
          800: "#111827",
        },
        accent: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
      boxShadow: {
        glow: "0 0 25px rgba(34, 211, 238, 0.25)",
      },
      backgroundImage: {
        "mesh-grid":
          "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.12), transparent 45%), radial-gradient(circle at 80% 10%, rgba(59, 130, 246, 0.14), transparent 35%), radial-gradient(circle at 50% 90%, rgba(6, 182, 212, 0.1), transparent 40%)",
      },
    },
  },
  plugins: [],
};
