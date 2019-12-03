const path = require('path');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
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
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ["minify", {
                            "mangle": false
                        }]]
                    }
                }
            }
        ]
    }
};