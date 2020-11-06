const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            indigo: colors.indigo,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            teal: colors.teal,
            primary: {
                lighter: colors.blue['300'],
                default: colors.blue['500'],
                darker: colors.blue['600'],
            },
            secondary: {
                lighter: colors.blue['100'],
                default: colors.blue['200'],
                darker: colors.blue['300'],
            },
            background: {
                lighter: colors.blue['100'],
                default: colors.blue['200'],
                darker: colors.blue['300'],
            }
        },
        textColor: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            yellow: colors.yellow,
            red: colors.red,
            green: colors.green,
            primary: {
                lighter: colors.gray['700'],
                default: colors.gray['800'],
                darker: colors.gray['900'],
            },
            secondary: {
                lighter: colors.gray['400'],
                default: colors.gray['500'],
                darker: colors.gray['600'],
            },
        },
        backgroundColor: {
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            gray: colors.gray,
            primary: {
                lighter: colors.blue['300'],
                default: colors.blue['500'],
                darker: colors.blue['600'],
            },
            secondary: {
                lighter: colors.blue['100'],
                default: colors.blue['200'],
                darker: colors.blue['300'],
            },
            container: {
                lighter: '#ffffff',
                default: '#fafafa',
                darker: '#f5f5f5',
            }
        },
        borderColor: {
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            gray: colors.gray,
            primary: {
                lighter: colors.blue['300'],
                default: colors.blue['500'],
                darker: colors.blue['600'],
            },
            secondary: {
                lighter: colors.blue['100'],
                default: colors.blue['200'],
                darker: colors.blue['300'],
            },
            container: {
                lighter: '#f5f5f5',
                default: '#e7e7e7',
                darker: '#b6b6b6',
            }
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        minHeight: {
            '0': '0',
            '25': '25vh',
            '50': '50vh',
            '75': '75vh',
            'screen': '100vh',
            'full': '100%',
        },
        maxHeight: {
            '0': '0',
            '25': '25vh',
            '50': '50vh',
            '75': '75vh',
            'screen': '100vh',
            'full': '100%',
        }
    },
    variants: {
        borderWidth: ['responsive', 'last', 'hover', 'focus'],
        margin: ['responsive', 'last', 'hover', 'focus'],
    },
    plugins: [
        require('@tailwindcss/custom-forms'),
        require('@tailwindcss/typography'),
    ],
    purge: {
        // enabled: false,
        content: [
            '../../**/*.phtml',
            './src/**/*.phtml'
        ]
    }
}
