/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: "Poppins",
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: 0, transform: "translateY(-20px)"},
                    '100%': {opacity: 1, transform: "translateY(0px)"},
                },
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
            },
        },
    },
    plugins: [],
};
