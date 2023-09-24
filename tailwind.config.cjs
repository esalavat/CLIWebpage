/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}', './src/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
            },
        },
    },
    plugins: [],

    corePlugins: {
        preflight: true,
    }
};