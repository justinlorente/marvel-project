module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    variants: {
        display: ['group-hover'],
        transitionProperty: ['group-hover', 'hover'],
        extend: {},
    },
    plugins: [],
};
