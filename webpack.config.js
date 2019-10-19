const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
				test: /\.s[c|a]ss$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/client/index.html',
			filename: 'index.html'
		})
	],
	devServer : {
		open: true,
		contentBase: '/dist',
		historyApiFallback: true
	}
};