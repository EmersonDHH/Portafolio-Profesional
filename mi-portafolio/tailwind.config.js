/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        colors: {
            primary: '#2D2D2D',
            accent: '#4ACAE2',
            secondary: '#B3B3B3',
        }
    }
};
export const plugins = [];
