/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // This simple line covers everything in src
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617",
                surface: "#0f172a",
                primary: "#fbbf24",
                secondary: "#22d3ee",
                textSecondary: "#94a3b8"
            },
        },
    },
    plugins: [],
};