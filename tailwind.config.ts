import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { ink: "#102535", navy: "#082032", gold: "#c9a56a", sand: "#f7f4ef" }, fontFamily: { display: ["var(--font-display)"], body: ["var(--font-body)"] } } }, plugins: [] };
export default config;
