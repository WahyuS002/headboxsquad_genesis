module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                grandstander: 'Grandstander',
                inter: 'Inter',
            },
            colors: {
                primary: {
                    20: '#E1DEFF',
                    30: '#CDC9FF',
                    50: '#C3BEFF',
                    70: '#AFA8FF',
                    90: '#9B92FF',
                },
                secondary: {
                    20: '#C5C2E8',
                    30: '#8B84D1',
                    50: '#7770CA',
                    70: '#645BC2',
                    90: '#3D32B3',
                },
                neutral: {
                    100: '#EEF2F6',
                    200: '#E7ECF2',
                    300: '#D5DDE5',
                    400: '#B8C1CC',
                    500: '#ADB9C7',
                    600: '#8F9CA9',
                    700: '#66737F',
                    800: '#36414C',
                    900: '#1C2534',
                    1000: '#0F182E',
                },
            },
        },
    },
    plugins: [],
}
