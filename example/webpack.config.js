var path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path:     path.resolve('build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader']
        }]
    }
};