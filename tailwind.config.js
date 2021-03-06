module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green1: "#22C55E",
                gray1: "#F4F5F7",
                
            },
        },
    },
    daisyui: {
        themes: [
            {
                theme1: {
                    primary: "#22C55E",
                    "primary-content" : "#FFFFFF",
                    secondary: "#F4F5F7",
                    "secondary-content" : "#111318",
                    accent: "#efbdaa",
                    neutral: "#000000",
                    "base-100": "#4ADE80",
                    info: "#A7D5E6",
                    success: "#7AE6A7",
                    warning: "#B69907",
                    error: "#F52E69",
                }
            },
        ],
    },
    plugins: [
        require("daisyui")
    ],
};
