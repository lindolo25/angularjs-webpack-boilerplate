/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const devServer = {
	contentBase: path.resolve(__dirname, '.dist'),
	port: 3000
};

module.exports = (env) => {

	const config = {
		entry: './src/app.js',
		mode: 'development',
		devtool: 'inline-source-map',
		output: {
			filename: 'bundle.js',
			chunkFilename: '[name].[chunkhash].js',
			path: path.resolve(__dirname, '.dist')
		},
		resolve: {
			extensions: ['.js', '.ts']
		},
		optimization: {
			splitChunks: { chunks: 'all', },
		},
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'eslint-loader',
				},
				{
					test: /\.(html)$/,
					exclude: path.resolve('./src/index.html'),
					use: {
						loader: 'html-loader',
						options: {
							attrs: [':data-src']
						}
					}
				},
				{
					test: /\.tsx?$/,  
					use: [ 'awesome-typescript-loader?noEmit=true' ]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(scss)$/,
					use: [{
						loader: 'style-loader', // inject CSS to page
					}, {
						loader: 'css-loader', // translates CSS into CommonJS modules
					}, {
						loader: 'postcss-loader', // Run post css actions
						options: {
							plugins: function () { // post css plugins, can be exported to postcss.config.js
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					}, {
						loader: 'sass-loader' // compiles Sass to CSS
					}]
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: path.resolve('./src/index.html')
			})
		]
	};

	if (env && env.dev) {
		config.devServer = devServer;
		config.plugins.push(
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin()
		);
	}

	if (env && env.production) {
		config.devtool = 'source-map';
		config.plugins.push(
			new UglifyJSPlugin({
				uglifyOptions: {
					warnings: false,
					output: { comments: false }
				},
				sourceMap: true
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify('production')
			})
		);
	}

	return config;
};