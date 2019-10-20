const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude:  /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/index.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		})
	],
	devServer : {
		open: true,
		contentBase: '/dist',
		historyApiFallback: true
	}
};