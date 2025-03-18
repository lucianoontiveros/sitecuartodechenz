/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    base: "inline animate-spin text-gray-200",
    extend: {
      colors: {
        // Nombres personalizados para tus colores
        gray: "#909090",
        skyBlue: "#80DAEB",
        teal: "#018DA5",
        mintGreen: "#67DDAB",
        darkGreen: "#0B9B8A",
        // Puedes definir más colores según tus necesidades
      },
    },
    container: {
      center: true,
      background: "#0B9B8A",
    },
    keyframes: {
      "border-dance-movil": {
        "0%": { borderColor: " #D0F8CF" },
        "25%": { borderColor: "#CAF9C9" },
        "50%": { borderColor: "#C0F9BF" },
        "75%": { borderColor: "#BCFABA" },
        "100%": { borderColor: "#B3F9B1" },
      },
      "border-dance-tablet": {
        "0%": { borderColor: "#D6C2F7" },
        "25%": { borderColor: "#D4BDFB" },
        "50%": { borderColor: "#D0B6FB" },
        "75%": { borderColor: "#CCB0FC" },
        "100%": { borderColor: "#C5A6F9" },
      },
      "border-dance-latop": {
        "0%": { borderColor: "#7DD8B2" },
        "25%": { borderColor: "#79D8B0" },
        "50%": { borderColor: "#72D8AD" },
        "75%": { borderColor: "#6DD8AB" },
        "100%": { borderColor: "#65D8A8" },
      },
      "border-dance-desktop": {
        "0%": { borderColor: "#77F9E2" },
        "25%": { borderColor: "#77F9EB" },
        "50%": { borderColor: "#77F9F5" },
        "75%": { borderColor: "#77F3F9" },
        "100%": { borderColor: "#77DFF9" },
      },
      pulse: {
        "0%": { opacity: 1 },
        "50%": { opacity: 0.5 },
        "100%": { opacity: 1 },
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
    },
    animation: {
      "dance-movil": "border-dance-movil 5s linear infinite",
      "dance-tablet": "border-dance-tablet 5s linear infinite",
      "dance-latop": "border-dance-latop 5s linear infinite",
      "dance-desktop": "border-dance-desktop 5s linear infinite",
      "pulse-icon": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      "spin-roll": "spin 1s linear infinite",
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline-green-200": {
          textDecoration: "underline",
          "text-decoration-thickness": "0.2em",
          "text-decoration-color": "rgb(188 240 218 / var(--tw-text-opacity))",
        },
        ".underline-indigo-300": {
          textDecoration: "underline",
          "text-decoration-thickness": "0.3em",
          "text-decoration-color": "rgb(180 198 252 / var(--tw-text-opacity))",
        },
        ".underline-mintGreen": {
          textDecoration: "underline",
          "text-decoration-thickness": "0.4em",
          "text-decoration-color": "rgb(103 221 171 / var(--tw-text-opacity))",
        },
        ".underline-skyBlue": {
          textDecoration: "underline",
          "text-decoration-thickness": "0.5em",
          "text-decoration-color": "rgb(128 218 235 / var(--tw-text-opacity))",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
