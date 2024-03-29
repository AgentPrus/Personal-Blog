const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet,
                gray: colors.neutral,
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
