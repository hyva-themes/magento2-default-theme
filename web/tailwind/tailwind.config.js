const {colors} = require('tailwindcss/defaultTheme')

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
                DEFAULT: colors.blue['800'],
                darker: colors.blue['900'],
            },
            secondary: {
                lighter: colors.blue['100'],
                DEFAULT: colors.blue['200'],
                darker: colors.blue['300'],
            },
            background: {
                lighter: colors.blue['100'],
                DEFAULT: colors.blue['200'],
                darker: colors.blue['300'],
            }
        },
        textColor: {
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            yellow: colors.yellow,
            orange: {
                100: '#fffaf0',
                200: '#feebc8',
                300: '#fbd38d',
                400: '#f6ad55',
                500: '#ed8936',
                600: '#dd6b20',
                700: '#c05621',
                800: '#9c4221',
                900: '#7b341e',
            },
            red: colors.red,
            green: colors.green,
            transparent: colors.transparent,
            primary: {
                lighter: colors.gray['700'],
                DEFAULT: colors.gray['800'],
                darker: colors.gray['900'],
            },
            secondary: {
                lighter: colors.gray['400'],
                DEFAULT: colors.gray['600'],
                darker: colors.gray['800'],
            },
        },
        backgroundColor: {
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            red: colors.red,
            yellow: colors.yellow,
            orange: {
                100: '#fffaf0',
                200: '#feebc8',
                300: '#fbd38d',
                400: '#f6ad55',
                500: '#ed8936',
                600: '#dd6b20',
                700: '#c05621',
                800: '#9c4221',
                900: '#7b341e',
            },
            green: colors.green,
            gray: colors.gray,
            primary: {
                lighter: colors.blue['600'],
                DEFAULT: colors.blue['700'],
                darker: colors.blue['800'],
            },
            secondary: {
                lighter: colors.blue['100'],
                DEFAULT: colors.blue['200'],
                darker: colors.blue['300'],
            },
            container: {
                lighter: '#ffffff',
                DEFAULT: '#fafafa',
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
                lighter: colors.blue['600'],
                DEFAULT: colors.blue['700'],
                darker: colors.blue['800'],
            },
            secondary: {
                lighter: colors.blue['100'],
                DEFAULT: colors.blue['200'],
                darker: colors.blue['300'],
            },
            container: {
                lighter: '#f5f5f5',
                DEFAULT: '#e7e7e7',
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
        opacity: ['responsive', 'hover', 'focus','disabled'],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
    purge: {
        // Examples for excluding patterns from purge
        // options: {
        //     safelist: [/^bg-opacity-/, /^-?[mp][trblxy]?-[4,8]$/, /^text-shadow/],
        // },
        content: [
            '../../**/*.phtml',
            './src/**/*.phtml'
        ]
    }
}
