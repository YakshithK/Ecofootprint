module.exports = {
    mode: 'jit',
    content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
    darkMode: 'class',
    theme: {
        screens: {md: {max: '1050px'}, sm: {max: '550px'} },
        extend: {
            colors: {
                black: {900: '#000000'},
                gray: {800: '#514e20'},
                lime: {800: '#908a27'},
                white: {a700: '#ffffff'},
            },
            boxShadow: {},
            fontFamily: {karantina: "Karantina"},
            textShadow: { ts: "5px 4px 4px #ffffff" },
        },
    },
    plugins: [require("@tailwindcss/forms")],
}