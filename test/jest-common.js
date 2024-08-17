// common project configuration used by the other configs

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, '..'),
    verbose: true,
    moduleNameMapper: {},
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/.next/',
        'enzyme.js',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/dist/'],
};
