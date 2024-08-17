module.exports = {
    plugins: [
        ['@babel/plugin-transform-runtime', {
            asyncGenerators: false,
            generators: false,
            async: false,
        }],
        ['module-resolver', {
            root: ['./dist'],
        }],
    ],
};
