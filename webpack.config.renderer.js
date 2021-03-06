const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = merge(baseConfig, {
	entry: './src/renderer/index.tsx',
	target: 'electron-renderer',
	module: {
		rules: [
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				use: 'url-loader',
			},
			{
				test: /\.(scss|css)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		]
	},
	output: {
		filename: 'renderer.bundle.js',
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
		}),
	]
})

