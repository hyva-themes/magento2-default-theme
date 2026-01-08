/**
 * Hyvä Themes - https://hyva.io
 * Copyright © Hyvä Themes. All rights reserved.
 * See COPYING.txt for license details.
 */
const { postcssImportHyvaModules } = require("@hyva-themes/hyva-modules");

module.exports = {
    plugins: [
        postcssImportHyvaModules,
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('postcss-preset-env'),
    ]
}
