module.exports = {
    'env': {
        'amd': true,
        'browser': true,
        'commonjs': true,
        'es6': true,
        'jasmine': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'globals': {
        'sandbox': true,
        'setFixtures': true
    },
    'parser': 'babel-eslint',
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
