const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        chunkFilename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, '.dist')
    },
    devServer: {
        contentBase: __dirname,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};