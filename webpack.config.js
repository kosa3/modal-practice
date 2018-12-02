module.exports = {
    mode: 'development',
    entry: './js/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    }
};