/* eslint-disable import/no-anonymous-default-export */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // backgroundImage: {
            //     'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
            // },
            // colors: {
            //     neutral: colors.neutral
            // },
            // fontFamily: {
            //     sans: ['Inter', ...defaultTheme.fontFamily.sans]
            // }
        }
    },
    plugins: []
};
